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
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {

    return (

        <div className='mt-[79px]'>

            <SectionTitle
                subHeading={`---From 11:00am to 10:00pm---`}
                heading={`ORDER ONLINE`}
            />

            <div className='mt-12 max-w-screen-xl mx-auto'>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className='text-[#FFFFFF] uppercase font-normal lg:text-2xl cinzel text-center -mt-16'>
                            Salads
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className='text-[#FFFFFF] uppercase font-normal lg:text-2xl cinzel text-center -mt-16'>
                            pizzas
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className='text-[#FFFFFF] uppercase font-normal lg:text-2xl cinzel text-center -mt-16'>
                            Soups
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className='text-[#FFFFFF] uppercase font-normal lg:text-2xl cinzel text-center -mt-16'>
                            desserts
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className='text-[#FFFFFF] uppercase font-normal lg:text-2xl cinzel text-center -mt-16'>
                            Salads
                        </h3>
                    </SwiperSlide>
                </Swiper>

            </div>

            <div className='mt-32 max-w-screen-xl mx-auto'>
                <div className="hero min-h-screen bg-fixed"
                    style={{ backgroundImage: 'url(https://i.ibb.co/4VLcV6Z/chef-service.jpg)' }}
                >
                    <div className="hero-content text-center bg-[white]">
                        <div className="max-w-screen-lg mx-auto">
                            <h1 className="mb-2 cinzel text-[45px] font-normal">Bistro Boss</h1>
                            <p className="mb-5">Bistro Boss is a cozy restaurant offering delicious meals in a welcoming atmosphere. With a diverse menu featuring flavorful dishes, it's a go-to spot for satisfying your culinary cravings and enjoying a delightful dining experience.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Category;