import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {

    const [clientSecret, setClientSecret] = useState("");

    const [error, setError] = useState('')

    const stripe = useStripe();

    const elements = useElements();

    const axiosSecure = useAxiosSecure();

    const [cart, refetch] = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const { user } = useAuth();

    const [transactionId, setTransactionId] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // ------------ Confirm Payment -------------

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error');
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('transactionId', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Done!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }

            }
        }

    };

    return (
        <form className="w-4/5 mx-auto mt-16" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="text-center">
                <button
                    className="btn btn-wide text-white bg-[#570DF8] mt-16"
                    type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
            <div className="mt-10 text-center font-semibold">
                <p className="text-red-600">{error}</p>
                {transactionId &&
                    <p className="text-green-600 font-semibold">Your TransactionId: {transactionId}</p>}
            </div>
        </form>
    );
};

export default CheckoutForm;