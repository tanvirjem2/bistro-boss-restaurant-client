
import { Link } from "react-router-dom";

import MenuItem from "../../Shared/MenuItem/MenuItem";

import CoverMenu from "../../Shared/Cover/CoverMenu";


const MenuCategory = ({ items, title }) => {



    return (
        <div>
            <div className="mt-12 max-w-screen-xl mx-auto">

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                    }
                </div>

                <div className="text-center">
                    <Link to={`/order`}>
                        <button
                            className='uppercase btn btn-outline border-0 border-b-4 mt-6 text-[#BB8506]'>
                            ORDER YOUR FAVORITE FOOD
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default MenuCategory;