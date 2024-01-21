import { Helmet } from "react-helmet-async";

import shopImage from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";


const Order = () => {
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

            <h1>This is order page</h1>

        </div>
    );
};

export default Order;