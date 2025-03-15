import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Slide() {
    return (
        <>
            <div className='w-[80%] mx-auto mt-4'>

                <div className=''>
                    <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper h-[700px]">
                        <SwiperSlide><img className=" " src="/images/res.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className="" src="/images/hotel.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className="" src="/images/medical.png" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </>
    );
}
