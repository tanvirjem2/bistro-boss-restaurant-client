import slide1 from '../../../assets/home/Rectangle 5.png'
import slide2 from '../../../assets/home/Rectangle 5.png'
import slide3 from '../../../assets/home/Rectangle 5.png'

const ChefRecommends = () => {
    return (
        <div className="mt-32">
            <div className='text-center'>
                <p className='text-[#D99904] mb-4'><i>---Should Try---</i></p>
                <div className='border-t-2 border-b-2 w-2/4 lg:w-2/5 mx-auto'>
                    <h3 className='font-normal lg:text-[40px] p-3'>CHEF RECOMMENDS</h3>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl mx-auto gap-7 text-center">
                <div className="bg-[#F3F3F3] pb-8">
                    <img src={slide1} alt="" />
                    <p className='text-base font-semibold mt-8'>Caeser Salad</p>
                    <p className='text-xs font-normal mt-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='uppercase btn btn-outline border-0 border-b-4 mt-6 text-[#BB8506]'>add to cart</button>
                </div>
                <div className="bg-[#F3F3F3] pb-8">
                    <img src={slide2} alt="" />
                    <p className='text-base font-semibold mt-8'>Caeser Salad</p>
                    <p className='text-xs font-normal mt-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='uppercase btn btn-outline border-0 border-b-4 mt-6 text-[#BB8506]'>add to cart</button>
                </div>
                <div className="bg-[#F3F3F3] pb-8">
                    <img src={slide3} alt="" />
                    <p className='text-base font-semibold mt-8'>Caeser Salad</p>
                    <p className='text-xs font-normal mt-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='uppercase btn btn-outline border-0 border-b-4 mt-6 text-[#BB8506]'>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;