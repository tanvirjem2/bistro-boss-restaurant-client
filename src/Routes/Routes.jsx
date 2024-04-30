import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "../Routes/PrivateRoute"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from '.././Routes/AdminRoute'
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";


// Don't forget to export the router

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/menu", element: <Menu /> },
            { path: "/order/:category", element: <Order /> },
            { path: "/contact", element: <Contact /> },
            { path: "/login", element: <Login /> },
            { path: "/signUp", element: <SignUp /> }
        ]
    },

    // ---------- Dashboard ------------

    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [

            // ---------- Normal Users Routes -----

            { path: 'cart', element: <Cart /> },
            { path: 'payment', element: <Payment /> },
            { path: 'paymentHistory', element: <PaymentHistory /> },

            // ----------- Admin Routes ----------

            { path: 'users', element: <AdminRoute><AllUsers /></AdminRoute> },
            { path: 'addItems', element: <AdminRoute><AddItems /></AdminRoute> },
            { path: 'manageItems', element: <AdminRoute><ManageItems /></AdminRoute> },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
        ]
    }
]);