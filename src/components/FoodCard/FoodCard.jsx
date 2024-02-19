

const FoodCard = ({ item }) => {

    const { name, image, recipe, price } = item;

    return (
        <div className="bg-[#F3F3F3] pb-8">
            <div className="relative">
                <img className="w-full" src={image} alt="Food" />
                <p
                    className="absolute right-0 top-0 bg-[#111827] text-white text-xs font-semibold mt-5 mr-5 p-2 rounded-lg">
                    ${price}
                </p>
            </div>
            <p className='text-base font-semibold mt-8'>{name}</p>
            <p className='text-xs font-normal mt-2'>{recipe}</p>
            <button className='uppercase btn btn-outline border-0 border-b-4 mt-6 text-[#BB8506]'>add to cart</button>
        </div>
    );
};

export default FoodCard;