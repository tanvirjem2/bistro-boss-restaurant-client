import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }

    })

    // ---------- Update function -----------

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Now an Admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // ---------- Delete function -----------

    const handleDeleteUser = user => {
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
                deleteUserItem(user._id);
            }
        });
    }

    // Function to delete an item from the cart

    const deleteUserItem = id => {
        axiosSecure.delete(`/users/${id}`)
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

    return (
        <div className="my-5">
            <div className="shadow-lg mt-14 w-4/5 mx-auto rounded-lg overflow-y-auto max-h-[500px]">
                <div className="p-10">
                    <h2 className="text-2xl font-bold">Total users: {users.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th></th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {/* Button to delete item */}
                                        {
                                            user.role === 'admin' ?
                                                'Admin'
                                                :
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn btn-ghost bg-[#D1A054] text-white text-xl">
                                                    <FaUsers />
                                                </button>
                                        }

                                    </td>
                                    <td>
                                        {/* Button to delete item */}

                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="btn btn-ghost bg-[#B91C1C] text-white">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;