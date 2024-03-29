import { useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [showAll, setShowAll] = useState(false);

    const [menu] = useMenu();

    return (

        <div className="mt-12 max-w-screen-xl mx-auto">

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">

                {showAll ?
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                    :
                    menu.slice(0, 6).map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>

            <div className="text-center mt-12">
                <button className="btn uppercase border-0 border-b-4 btn-outline" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Hide Menu' : 'View Full  Menu'}
                </button>

            </div>

        </div>

    );
};

export default PopularMenu;