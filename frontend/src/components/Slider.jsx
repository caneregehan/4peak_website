// Import necessary modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Slider({ sliderData }) {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        className="relative progress-slide-carousel swiper-container">
        {sliderData?.map((sliderItem) => {
          return (
            <SwiperSlide key={sliderItem.id}>
              <div className="flex items-center justify-center bg-indigo-50 rounded-2xl gap-y-7 h-fit">
                <img
                  alt="img"
                  src={sliderItem.imgSource}
                  className="w-fit h-52"
                />
              </div>
            </SwiperSlide>
          );
        })}

        <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100" />
      </Swiper>
    </div>
  );
}
