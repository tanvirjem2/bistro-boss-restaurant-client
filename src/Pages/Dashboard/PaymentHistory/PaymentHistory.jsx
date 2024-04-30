import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })

    return (
        <div className="my-5">
            <div className="shadow-lg mt-14 w-4/5 mx-auto rounded-lg overflow-y-auto max-h-[500px]">
                <div className="p-10">
                    <h2 className="text-2xl font-bold">Total Payments: {payments.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th></th>
                                <th>EMAIL</th>
                                <th>TOTAL PRICE</th>
                                <th>PAYMENT DATE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.email}</td>
                                <td>${payment.price}</td>
                                <td>{payment.date}</td>
                                <td>{payment.status}</td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;