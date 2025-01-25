import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ theme }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
    };

    return (
        <div className="hidden lg:flex justify-center items-center bg-base-200">
            <div className="w-[80%] mx-auto">
                <div className="py-8">
                    <Slider {...settings}>
                        <div className="flex justify-center items-center">
                            <img className="w-full h-[750px] object-contain" src="/images/soup.png" alt=""/>
                        </div>
                        <div className="flex justify-center items-center">
                            <img className="w-full h-[750px] object-contain" src="/images/roofer.png" alt=""/>
                        </div>
                        <div className="flex justify-center items-center">
                            <img className="w-full h-[750px] object-contain" src="/images/car.png" alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Slide;
