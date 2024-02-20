// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import quote from '../../../assets/home/quote-left 1.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="mt-32 max-w-screen-xl mx-auto">

            <SectionTitle
                subHeading={`---What Our Clients Say---`}
                heading={`TESTIMONIALS`}
            />

            <div className='text-center'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className='w-10/12 mx-auto my-12'
                            />
                            <img className='mx-auto mb-10' src={quote} alt="" />
                            <div className='space-y-2'>
                                <p className='text-[#444444] text-sm font-normal w-10/12 mx-auto'>
                                    {review.details}
                                </p>
                                <h3 className='text-[#CD9003] text-3xl font-medium'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)}
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;