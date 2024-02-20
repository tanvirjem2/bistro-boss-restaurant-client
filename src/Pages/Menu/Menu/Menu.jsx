import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import CoverMenu from '../../Shared/Cover/CoverMenu';
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Menu = () => {

    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered');

    const dessert = menu.filter(item => item.category === 'dessert');

    const pizza = menu.filter(item => item.category === 'pizza');

    const salad = menu.filter(item => item.category === 'salad');

    const soup = menu.filter(item => item.category === 'soup');

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

                <SectionTitle
                    subHeading={`---Don't miss---`}
                    heading={`TODAY'S OFFER`}
                />

            </div>

            {/* ---------------- Offered Items -------------------- */}

            <div className='mb-14'>
                <MenuCategory items={offered}></MenuCategory>
            </div>

            <CoverMenu
                img={dessertImage}
                title={"DESSERTS"}
                paragraph={`Indulge in a symphony of flavors as each bite unveils a culinary masterpiece. Savory delights and exquisite textures dance on your palate, transforming every meal into a gastronomic celebration.`}
            >

            </CoverMenu>

            {/* ----------------- For Dessert -------------------- */}

            <div className='mb-14'>
                <MenuCategory title={`dessert`} items={dessert}></MenuCategory>
            </div>

            <CoverMenu
                img={pizzaImage}
                title={"PIZZA"}
                paragraph={`Indulge in a symphony of flavors as each bite unveils a culinary masterpiece. Savory delights and exquisite textures dance on your palate, transforming every meal into a gastronomic celebration.`}
            >

            </CoverMenu>

            {/* ---------------- PIZZA Items -------------------- */}

            <div className='mb-14'>
                <MenuCategory title={`pizza`} items={pizza}></MenuCategory>
            </div>

            <CoverMenu
                img={saladImage}
                title={"SALADS"}
                paragraph={`Indulge in a symphony of flavors as each bite unveils a culinary masterpiece. Savory delights and exquisite textures dance on your palate, transforming every meal into a gastronomic celebration.`}
            >

            </CoverMenu>

            {/* ---------------- SALADS Items -------------------- */}

            <div className='mb-14'>
                <MenuCategory title={`salad`} items={salad}></MenuCategory>
            </div>

            <CoverMenu
                img={soupImage}
                title={"SOUPS"}
                paragraph={`Indulge in a symphony of flavors as each bite unveils a culinary masterpiece. Savory delights and exquisite textures dance on your palate, transforming every meal into a gastronomic celebration.`}
            >

            </CoverMenu>

            {/* ---------------- SOUPS Items -------------------- */}

            <div className='mb-14'>
                <MenuCategory title={`soup`} items={soup}></MenuCategory>
            </div>

        </div >
    );
};

export default Menu;