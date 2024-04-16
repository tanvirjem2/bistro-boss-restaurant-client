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
            { path: "/signUp", element: <SignUp /> },
        ]
    },
]);