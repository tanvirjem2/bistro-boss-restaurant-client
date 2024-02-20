import { Link } from "react-router-dom";


const NavBar = () => {

    const navOptions = <>
        <li><Link to={`/`}>HOME</Link></li>
        <li><Link to={`/contact`}>CONTACT US</Link></li>
        <li><Link>DASHBOARD</Link></li>
        <li><Link to={`/menu`}>OUR MENU</Link></li>
        <li><Link to={`/order/salad`}>OUR SHOP</Link></li>
    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black lg:px-12 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-6">

                        {/* For Small Devices */}

                        {navOptions}

                    </ul>
                </div>
                <Link to={"/"}>
                    <a className="text-xl">
                        <span className="text-xl lg:text-[32px] font-black cinzel">BISTRO BOSS</span>
                        <br />
                        <span className="lg:text-2xl font-bold cinzel tracking-[9.12px]">Restaurant</span>
                    </a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">

                    {/* For large Devices */}

                    {navOptions}

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;