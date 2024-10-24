// Import necessary modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "progressbar",
        }}
        className="relative progress-slide-carousel swiper-container">
        <SwiperSlide>
          <div className="flex items-center justify-center bg-indigo-50 rounded-2xl h-96">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 1
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center bg-indigo-50 rounded-2xl h-96">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 2
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center bg-indigo-50 rounded-2xl h-96">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 3
            </span>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
      </Swiper>
    </div>
  );
}
