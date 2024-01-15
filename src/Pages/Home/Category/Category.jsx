// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <div className='mt-[79px]'>
            <div className='text-center'>
                <p className='text-[#D99904] mb-4'><i>---From 11:00am to 10:00pm---</i></p>
                <hr />
                <h3 className='font-normal text-[40px]'>ORDER ONLINE</h3>
                <hr />
            </div>
            <div className='mt-12'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className='text-[#FFFFFF] uppercase font-normal text-2xl cinzel text-center -mt-16'>
                            Salads
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className='text-[#FFFFFF] uppercase font-normal text-2xl cinzel text-center -mt-16'>
                            pizzas
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className='text-[#FFFFFF] uppercase font-normal text-2xl cinzel text-center -mt-16'>
                            Soups
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className='text-[#FFFFFF] uppercase font-normal text-2xl cinzel text-center -mt-16'>
                            desserts
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className='text-[#FFFFFF] uppercase font-normal text-2xl cinzel text-center -mt-16'>
                            Salads
                        </h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;