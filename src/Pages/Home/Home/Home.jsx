import SectionTitle from "../../../components/SectionTitle/SectionTitle";
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

            <div className='mt-[92px]'>

                <SectionTitle
                    subHeading={`---Check it out---`}
                    heading={`FROM OUR MENU`}
                />

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