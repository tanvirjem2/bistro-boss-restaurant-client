

const MenuItem = ({ item }) => {

    const { name, image, recipe, price } = item

    return (
        <div className="flex">
            <img
                className="w-[118px] mr-8"
                style={{ borderRadius: '0px 200px 200px 200px' }} src={image} alt="" />
            <div>
                <h3 className="uppercase cinzel text-sm font-normal">{name} ------------------</h3>
                <p className="text-xs font-normal mt-2">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-sm font-normal">${price}</p>
        </div>
    );
};

export default MenuItem;