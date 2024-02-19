import { Helmet } from "react-helmet-async";

import shopImage from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";

import '../Order/Order.css'
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = useMenu();

    const drinks = menu.filter(item => item.category === 'drinks');

    const dessert = menu.filter(item => item.category === 'dessert');

    const pizza = menu.filter(item => item.category === 'pizza');

    const salad = menu.filter(item => item.category === 'salad');

    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>

            <Cover
                img={shopImage}
                title={"OUR SHOP"}
                paragraph={"Would you like to try a dish?"}
            ></Cover>

            <div className="font-bold mt-32 max-w-screen-xl mx-auto text-center">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <div className="mt-14">
                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center ">
                                {pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center ">
                                {soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center ">
                                {dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center ">
                                {drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;