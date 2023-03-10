import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Slides = () => {
  return (
    <div className="md:my-[10vh] my-[10vh] md:w-[80%] w-[90%] lg:w-[60%] mx-auto">
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper "
      >
        <SwiperSlide><img className="object-contain w-full h-full rounded-xl" src="https://images.pexels.com/photos/3770090/pexels-photo-3770090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></SwiperSlide>
        <SwiperSlide><img className="object-contain w-full h-full rounded-xl" src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=600" /></SwiperSlide>
        <SwiperSlide><img className="object-contain w-full h-full rounded-xl" src="https://images.pexels.com/photos/307006/pexels-photo-307006.jpeg?auto=compress&cs=tinysrgb&w=600" /></SwiperSlide>
        <SwiperSlide><img className="object-contain w-full h-full rounded-xl" src="https://images.pexels.com/photos/3779747/pexels-photo-3779747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></SwiperSlide>
        <SwiperSlide><img className="object-contain w-full h-full rounded-xl" src="https://images.pexels.com/photos/3417733/pexels-photo-3417733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></SwiperSlide>
        <SwiperSlide><img className="object-contain w-full h-full rounded-xl" src="https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></SwiperSlide>
        <SwiperSlide><img className="object-contain w-full h-full rounded-xl" src="https://images.pexels.com/photos/4555526/pexels-photo-4555526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slides