
const CoverMenu = ({ img, title, paragraph }) => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed mt-11"
                style={{ backgroundImage: `url("${img}")` }}
            >
                <div className="hero-content text-center bg-[#0F0F0F63] text-[#FFF]">
                    <div className="max-w-screen-lg mx-auto">
                        <div className="p-20">
                            <h1 className="mb-2 cinzel text-[45px] font-semibold">{title}</h1>
                            <p className="text-xs font-semibold">{paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverMenu;