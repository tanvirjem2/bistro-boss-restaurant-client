import { useState } from 'react';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

import moment from 'moment';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Featured = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const content = 'Welcome to our exquisite dining haven, where the artistry of flavors converges with a warm ambiance to create an unforgettable culinary experience. At our restaurant, we pride ourselves on delivering a symphony of tastes that dance on the palate, each dish crafted with meticulous care and inspired by the rich tapestry of culinary traditions.';

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mt-32 featured-item text-white relative bg-fixed">

            <div className='py-32 featured-content'>

                <SectionTitle
                    subHeading={`---Check it out---`}
                    heading={`FROM OUR MENU`}
                />

                <div className='lg:flex max-w-screen-xl mt-12 mx-auto items-center gap-16'>
                    <img className='lg:w-[648px] lg:h-[400px]' src={featured} alt="" />
                    <div>
                        <div className='space-y-2 mt-6'>
                            <p className='text-2xl font-normal'>{moment().format("MMMM D, YYYY")}</p>
                            <p className='text-2xl font-normal'>WHERE CAN I GET SOME?</p>
                            {isExpanded ? (
                                <p className="text-xl font-normal">{content}</p>
                            ) : (
                                <p className="text-xl font-normal">{content.slice(0, 200)}...</p>
                            )}
                        </div>
                        <button className='btn btn-outline mt-6 uppercase text-white border-0 border-b-4' onClick={handleReadMore}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;