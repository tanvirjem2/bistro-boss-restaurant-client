import { FaTrash } from "react-icons/fa6"; // Importing trash icon from react-icons/fa6
import useCart from "../../../hooks/useCart"; // Importing custom hook to fetch cart data
import Swal from "sweetalert2"; // Importing library for displaying alerts
import useAxiosSecure from "../../../hooks/useAxiosSecure"; // Importing custom hook for secure Axios requests
import React, { useMemo } from "react"; // Importing React and useMemo hook

const Cart = () => {

    // Fetch cart data using custom hook

    const [cart, refetch] = useCart();

    // Calculate total price of items in cart using useMemo hook

    const totalPrice = useMemo(() => cart.reduce((total, item) => total + item.price, 0), [cart]);

    // Custom hook for secure Axios requests

    const axiosSecure = useAxiosSecure();

    // Function to confirm and delete an item from the cart

    const confirmDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCartItem(id);
            }
        });
    }

    // Function to delete an item from the cart

    const deleteCartItem = id => {
        axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {

                    refetch(); // Refetch cart data after deletion

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
    }

    // Render the cart component

    return (
        <div className="my-5">

            {/* Apply overflow CSS to make the table scrollable */}

            <div className="shadow-lg mt-14 w-4/5 mx-auto rounded-lg overflow-y-auto max-h-[500px]">
                <div className="flex items-center justify-evenly p-10">

                    {/* Display total number of orders and total price */}

                    <h2 className="text-2xl font-bold">Total orders: {cart.length}</h2>
                    <h2 className="text-2xl font-bold">total price: ${totalPrice}</h2>

                    {/* Button to proceed for payment */}

                    <button className="btn text-white bg-[#D1A054]">PAY</button>
                </div>
                <div className="overflow-x-auto">

                    {/* Table to display cart items */}

                    <table className="table">

                        {/* Table head */}

                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* Map through cart items and display them */}

                            {cart.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">

                                            {/* Display item image */}

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Display item name */}

                                    <td>{item.name}</td>

                                    {/* Display item price */}

                                    <td>{item.price}</td>

                                    <th>

                                        {/* Button to delete item */}

                                        <button
                                            onClick={() => confirmDelete(item._id)}
                                            className="btn btn-ghost bg-[#B91C1C] text-white">
                                            <FaTrash />
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
