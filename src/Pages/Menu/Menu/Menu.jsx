import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import menuImage from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import CoverMenu from '../../Shared/Cover/CoverMenu';

import dessertImage from '../../../assets/menu/dessert-bg.jpeg'

import pizzaImage from '../../../assets/menu/pizza-bg.jpg'

import saladImage from '../../../assets/menu/salad-bg.jpg'

import soupImage from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImage}
                title={"OUR MENU"}
                paragraph={"Would you like to try a dish?"}
            ></Cover>

            <div className='text-center mt-[130px]'>
                <p className='text-[#D99904] mb-4'><i>---Don't miss---</i></p>
                <div className='border-t-2 border-b-2 w-2/4 lg:w-4/12 mx-auto'>
                    <h3 className='font-normal lg:text-[40px] p-3'>TODAY'S OFFER</h3>
                </div>
            </div>

            <PopularMenu />

            <CoverMenu
                img={dessertImage}
                title={"DESSERTS"}
                paragraph={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            >

            </CoverMenu>

            <PopularMenu />

            <CoverMenu
                img={pizzaImage}
                title={"PIZZA"}
                paragraph={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            >

            </CoverMenu>

            <PopularMenu />

            <CoverMenu
                img={saladImage}
                title={"SALADS"}
                paragraph={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            >

            </CoverMenu>

            <PopularMenu />

            <CoverMenu
                img={soupImage}
                title={"SOUPS"}
                paragraph={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            >

            </CoverMenu>

            <PopularMenu />

        </div >
    );
};

export default Menu;