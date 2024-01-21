import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Banner />
            <Category />

            <div className='text-center mt-[92px]'>
                <p className='text-[#D99904] mb-4'><i>---Check it out---</i></p>
                <div className='border-t-2 border-b-2 w-2/4 lg:w-4/12 mx-auto'>
                    <h3 className='font-normal lg:text-[40px] p-3'>FROM OUR MENU</h3>
                </div>
            </div>

            <PopularMenu />

            {/* Call us section */}

            <div className="mt-32 text-center bg-black max-w-screen-xl mx-auto">
                <h1 className="raleway lg:text-5xl font-semibold text-white py-10 lg:py-24">
                    Call Us: +88 0192345678910
                </h1>
            </div>

            <ChefRecommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;