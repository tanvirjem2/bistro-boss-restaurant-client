

const Cover = ({ img, title, paragraph }) => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed"
                style={{ backgroundImage: `url("${img}")` }}
            >
                <div className="hero-content text-center bg-[#0F0F0F63] text-[#FFF]">
                    <div className="max-w-screen-lg mx-auto">
                        <div className="p-20">
                            <h1 className="mb-2 cinzel text-[45px] lg:text-[88px] font-bold">{title}</h1>
                            <p className="cinzel text-2xl font-semibold">{paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;