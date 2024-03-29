import { Parallax } from 'react-parallax';

const Cover = ({ img, title, paragraph }) => {
    return (

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >

            <div>
                <div className="hero min-h-screen">
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
        </Parallax>

    );
};

export default Cover;