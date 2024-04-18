import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {

    const { name, image, recipe, price, _id } = item;

    const { user } = useAuth();

    // redirect user to the login page

    const navigate = useNavigate();

    const location = useLocation();

    // ---------- Use of custom hook ----------

    const axiosSecure = useAxiosSecure();

    const [, refetch] = useCart()

    const handleAddToCart = (food) => {
        if (user && user.email) {
            // send cart to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            // --------- Use of Axios -----------

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart to update the cart items count
                        refetch();
                    }
                })
        } else {
            Swal.fire({
                title: "Not logged in",
                text: "Login to add to cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login now!"
            }).then((result) => {
                if (result.isConfirmed) {

                    // -------------- Go to login ------------

                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="bg-[#F3F3F3] pb-8">
            <div className="relative">
                <img className="w-full" src={image} alt="Food" />
                <p
                    className="absolute right-0 top-0 bg-[#111827] text-white text-xs font-semibold mt-5 mr-5 p-2 rounded-lg">
                    ${price}
                </p>
            </div>
            <p className='text-base font-semibold mt-8'>{name}</p>
            <p className='text-xs font-normal mt-2'>{recipe}</p>
            <button onClick={() => { handleAddToCart(item) }}
                className='uppercase btn btn-outline border-0 border-b-4 mt-6 text-[#BB8506]'>
                add to cart
            </button>
        </div>
    );
};

export default FoodCard;