import { FaCalendarAlt, FaHome, FaMailBulk, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaBars, FaBook, FaCalendar, FaComment, FaList, FaUsers, FaUtensils, FaWallet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart()

    const [isAdmin] = useAdmin();

    return (
        <div className="flex cinzel">

            {/* ------------ Dashboard Sidebar ----------- */}

            <div className="w-72 min-h-screen bg-[#D1A054]">

                <div className="pl-8 my-5">
                    <h1 className="font-black text-2xl">BISTRO BOSS</h1>
                    <h2 className="tracking-[8px] font-bold">Restaurant</h2>
                </div>

                <ul className="menu p-4 space-y-2 font-semibold">

                    {
                        isAdmin ?
                            <>
                                {/* ------------- Home ----------- */}

                                <li>
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome />
                                        ADMIN HOME
                                    </NavLink>
                                </li>

                                {/* -------- Reservation ---------- */}

                                <li>
                                    <NavLink to='/dashboard/addItems'>
                                        <FaUtensils />
                                        ADD ITEMS
                                    </NavLink>
                                </li>

                                {/* -------- Payment ---------- */}

                                <li>
                                    <NavLink to='/dashboard/manageItems'>
                                        <FaList />
                                        MANAGE ITEMS
                                    </NavLink>
                                </li>

                                {/* ----------- Cart ---------- */}

                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        <FaBook />
                                        MANAGE BOOKINGS
                                    </NavLink>
                                </li>

                                {/* ----------- Add Review ---------- */}

                                <li>
                                    <NavLink to='/dashboard/users'>
                                        <FaUsers />
                                        ALL USERS
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
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
                                        MY CART ({cart.length})
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
                            </>
                    }

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