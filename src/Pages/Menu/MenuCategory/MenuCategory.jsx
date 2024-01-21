
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items }) => {



    return (
        <div>
            <div className="mt-12 max-w-screen-xl mx-auto">

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MenuCategory;