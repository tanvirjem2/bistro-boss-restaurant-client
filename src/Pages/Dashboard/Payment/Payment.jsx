import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe('')

const Payment = () => {
    return (
        <div>

            <SectionTitle
                heading={`PAYMENT`}
            />

            <div>
                <Elements stripe={stripePromise}>

                </Elements>
            </div>

        </div>
    );
};

export default Payment;