import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomePage = () => {
  return (
    <div className="w-[70%] ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPC1JLXPpNK4ih8jPVg863e7GI74N2-STRyfGzYMrZZ5tbcu7RXmF1BP-iUExyq_04VGY&usqp=CAU"
            alt="book pic"
            className="py-4 px-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/22739/optimized_large_thumb_children-stories-book-cover-541__1_.jpg"
            alt="book pic"
            className="py-4 px-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqpyXYVPWRQuJmIvLb1FvZyhrDE61oetirb-2uTcNUw&s"
            alt="book pic"
            className="py-4 px-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/d1/89/d7/d189d7f2fd2863c58a21bdf194a89fbb.jpg"
            alt="book pic"
            className="py-4 px-2"
          />
        </SwiperSlide>
        ...
      </Swiper>

      <div className="w-[50%] mt-20 ml-20">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="p-5 card shadow">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, illum?
            </div>
          </SwiperSlide>
          <SwiperSlide><div className="p-5 card shadow">Lorem ipsum dolor sit amet.</div></SwiperSlide>
          <SwiperSlide><div className="p-5 card shadow">Lorem ipsum dolor sit amet.</div></SwiperSlide>
          <SwiperSlide><div className="p-5 card shadow">Lorem ipsum dolor sit amet.</div></SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
