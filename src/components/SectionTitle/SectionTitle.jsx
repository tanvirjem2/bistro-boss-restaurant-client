
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center'>
            <p className='text-[#D99904] mb-4'><i>{subHeading}</i></p>
            <div className='border-t-2 border-b-2 w-2/4 lg:w-4/12 mx-auto'>
                <h3 className='font-normal lg:text-[40px] p-3'>{heading}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;