import { FaCalendarAlt, FaHome, FaMailBulk, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaBars, FaCalendar, FaComment, FaWallet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex cinzel">

            {/* ------------ Dashboard Sidebar ----------- */}

            <div className="w-72 min-h-screen bg-[#D1A054]">

                <div className="pl-8 my-5">
                    <h1 className="font-black text-2xl">BISTRO BOSS</h1>
                    <h2 className="tracking-[8px] font-bold">Restaurant</h2>
                </div>

                <ul className="menu p-4 space-y-2 font-semibold">

                    {/* ------------- Home ----------- */}

                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome />
                            USER HOME
                        </NavLink>
                    </li>

                    {/* -------- Reservation ---------- */}

                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar />
                            RESERVATION
                        </NavLink>
                    </li>

                    {/* -------- Payment ---------- */}

                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaWallet />
                            PAYMENT HISTORY
                        </NavLink>
                    </li>

                    {/* ----------- Cart ---------- */}

                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart />
                            MY CART
                        </NavLink>
                    </li>

                    {/* ----------- Add Review ---------- */}

                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaComment />
                            ADD REVIEW
                        </NavLink>
                    </li>

                    {/* ----------- My Booking ---------- */}

                    <li>
                        <NavLink to='/dashboard/booking'>
                            <FaCalendarAlt />
                            MY BOOKING
                        </NavLink>
                    </li>

                    <div className="divider"></div>

                    {/* ------------- Home ----------- */}

                    <li>
                        <NavLink to='/'>
                            <FaHome />
                            HOME
                        </NavLink>
                    </li>

                    {/* ------------- MENU ----------- */}

                    <li>
                        <NavLink to='/menu'>
                            <FaBars />
                            MENU
                        </NavLink>
                    </li>

                    {/* ------------- SHOP ----------- */}

                    <li>
                        <NavLink to='/order/salad'>
                            <FaShoppingBag />
                            SHOP
                        </NavLink>
                    </li>

                    {/* ------------- Contact ----------- */}

                    <li>
                        <NavLink to='/contact'>
                            <FaMailBulk />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* ----------- Dashboard Content ------------ */}

            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;