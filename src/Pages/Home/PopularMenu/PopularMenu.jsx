import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
            })
    }, [])

    return (
        <div className="mt-[92px] max-w-screen-xl mx-auto">
            <div className='text-center'>
                <p className='text-[#D99904] mb-4'><i>---Check it out---</i></p>
                <div className='border-t-2 border-b-2 w-2/4 lg:w-4/12 mx-auto'>
                    <h3 className='font-normal lg:text-[40px] p-3'>FROM OUR MENU</h3>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {showAll ?
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                    :
                    menu.slice(0, 6).map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className="text-center mt-12">
                <button className="btn uppercase" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Hide Menu' : 'View Full  Menu'}
                </button>

            </div>
            {/* Call us section */}

            <div className="mt-32 text-center bg-black">
                <h1 className="raleway lg:text-5xl font-semibold text-white py-10 lg:py-24">
                    Call Us: +88 0192345678910
                </h1>
            </div>

        </div>
    );
};

export default PopularMenu;