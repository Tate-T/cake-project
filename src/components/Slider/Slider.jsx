import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { useRef } from "react";

const Slider = ({ children, setSwiperInstance }) => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      onSwiper={(swiper) => setSwiperInstance(swiper)}
      slidesPerView={5}
      spaceBetween={18}
      freeMode={true}
    //   pagination={{
    //     clickable: true,
    //   }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};

export default Slider;
