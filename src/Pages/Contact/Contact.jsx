import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import contactImage from '../../assets/contact/banner.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

// React icons
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>

            <Cover
                img={contactImage}
                title={"CONTACT US"}
                paragraph={"Would you like to try a dish?"}
            ></Cover>

            <div className='text-center mt-[130px]'>

                <SectionTitle
                    subHeading={`---Visit Us---`}
                    heading={`OUR LOCATION`}
                />

            </div>

            <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto'>

                <div className='border'>
                    <div className='bg-[#D1A054] py-6 px-[196px] text-white text-xl'>
                        <FaPhoneVolume />
                    </div>
                    <div className='mx-[30px] mb-[30px] '>
                        <div className='text-center bg-[#F3F3F3] pt-[40px]'>
                            <p className='text-base font-medium'>PHONE</p>
                            <p className='text-xs font-normal mt-4 text-[#444444] pb-[86px]'>
                                +38 (012) 34 56 789
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border'>
                    <div className='bg-[#D1A054] py-6 px-[196px] text-white text-xl'>
                        <FaLocationDot />
                    </div>
                    <div className='mx-[30px] mb-[30px] '>
                        <div className='text-center bg-[#F3F3F3] pt-[40px]'>
                            <p className='text-base font-medium'>ADDRESS</p>
                            <p className='text-xs font-normal mt-4 text-[#444444] pb-[86px]'>
                                +38 (012) 34 56 789
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border'>
                    <div className='bg-[#D1A054] py-6 px-[196px] text-white text-xl'>
                        <IoTime />
                    </div>
                    <div className='mx-[30px] mb-[30px] '>
                        <div className='text-center bg-[#F3F3F3] pt-[40px]'>
                            <p className='text-base font-medium'>WORKING HOURS</p>
                            <p className='text-xs font-normal mt-4 text-[#444444] pb-[68px]'>
                                Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='text-center mt-[130px]'>

                <SectionTitle
                    subHeading={`---Send Us a Message---`}
                    heading={`CONTACT FORM`}
                />

            </div>
        </div>
    );
};

export default Contact;