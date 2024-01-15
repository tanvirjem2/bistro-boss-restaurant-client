import { useState } from 'react';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const content = 'Welcome to our exquisite dining haven, where the artistry of flavors converges with a warm ambiance to create an unforgettable culinary experience. At our restaurant, we pride ourselves on delivering a symphony of tastes that dance on the palate, each dish crafted with meticulous care and inspired by the rich tapestry of culinary traditions.';

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mt-32 featured-item text-white relative">
            <div className='py-32 featured-content'>
                <div className='text-center'>
                    <p className='text-[#D99904] mb-4'><i>---Check it out---</i></p>
                    <div className='border-t-2 border-b-2 w-2/4 lg:w-4/12  mx-auto'>
                        <h3 className='font-normal lg:text-[40px] p-3'>FROM OUR MENU</h3>
                    </div>
                </div>
                <div className='flex max-w-screen-xl mt-12 mx-auto items-center gap-16'>
                    <img className='w-[648px] h-[400px]' src={featured} alt="" />
                    <div>
                        <div className='space-y-2'>
                            <p className='text-2xl font-normal'>March 20, 2023</p>
                            <p className='text-2xl font-normal'>WHERE CAN I GET SOME?</p>
                            {isExpanded ? (
                                <p className="text-xl font-normal">{content}</p>
                            ) : (
                                <p className="text-xl font-normal">{content.slice(0, 200)}...</p>
                            )}
                        </div>
                        <button className='btn btn-outline mt-6 uppercase text-white' onClick={handleReadMore}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;