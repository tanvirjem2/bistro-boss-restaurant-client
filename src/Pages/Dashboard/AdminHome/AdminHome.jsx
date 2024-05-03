import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";

// -------- Rechart ---------

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';


const AdminHome = () => {

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res?.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res?.data;
        }
    })

    // -------- Custom shape for the bar chart ------------

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    //  ---------- Colors ----------

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


    // ---------- Custom shape for pie chart -------------

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    // --------- Colors -------------

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const pieChartData = chartData.map(data => {
        return {
            name: data.category, value: data.revenue
        }
    })


    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-3xl mt-10 font-semibold">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back!'
                }
            </h2>
            <div className="grid grid-cols-4 space-x-[25px] mt-6">
                <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-lg p-5 text-white">
                    <div className="flex items-center gap-6 text-2xl">
                        <FaWallet />
                        <div>
                            <p className="font-extrabold">${stats?.revenue}</p>
                            <p>Revenue</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-lg p-5 text-white">
                    <div className="flex items-center gap-6 text-2xl">
                        <FaUsers />
                        <div>
                            <p className="font-extrabold">{stats?.users}</p>
                            <p>Customers</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-lg p-5 text-white">
                    <div className="flex items-center gap-6 text-2xl">
                        <LuChefHat />
                        <div>
                            <p className="font-extrabold">{stats?.menuItems}</p>
                            <p>Products</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-lg p-5 text-white">
                    <div className="flex items-center gap-6 text-2xl">
                        <FaTruck />
                        <div>
                            <p className="font-extrabold">{stats?.orders}</p>
                            <p>Orders</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-evenly mt-8 shadow-lg p-5 rounded-lg">
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>
                    <PieChart width={500} height={300}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;