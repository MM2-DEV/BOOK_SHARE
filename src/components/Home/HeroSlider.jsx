import React, { useState } from "react";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSlider = () => {
  const [sliderImages, setSliderImages] = useState([
    {
      name: "Book 10",
      src: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Koyekti_Mritu-Jahir_Rayhan-23265-7662.jpg",
    },
    {
      name: "Book 1",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPC1JLXPpNK4ih8jPVg863e7GI74N2-STRyfGzYMrZZ5tbcu7RXmF1BP-iUExyq_04VGY&usqp=CAU",
    },
    {
      name: "Book 2",
      src: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/22739/optimized_large_thumb_children-stories-book-cover-541__1_.jpg",
    },
    {
      name: "Book 3",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqpyXYVPWRQuJmIvLb1FvZyhrDE61oetirb-2uTcNUw&s",
    },
    {
      name: "Book 4",
      src: "https://i.pinimg.com/736x/d1/89/d7/d189d7f2fd2863c58a21bdf194a89fbb.jpg",
    },
    {
      name: "Book 5",
      src: "https://cdn.kobo.com/book-images/6537dbab-dd34-4e0d-9670-c5a54e2ccb4e/353/569/90/False/yes-you-can-50-classic-self-help-books-that-will-guide-you-and-change-your-life-3.jpg",
    },
    {
      name: "Book 6",
      src: "https://www.eltbooks.com/cover/9780134306667.jpg",
    },
    {
      name: "Book 7",
      src: "https://d25swln94uq8y4.cloudfront.net/media/book_th/Samyabadi.jpg",
    },
    {
      name: "Book 8",
      src: "https://bengaliebook.com/wp-content/uploads/2021/07/%E0%A6%AC%E0%A6%BE%E0%A6%81%E0%A6%A7%E0%A6%A8-%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BE-768x1086.jpg",
    },
    {
      name: "Book 9",
      src: "https://static-01.daraz.com.bd/p/44f6ebd30511965d0ea34e057241b6eb.jpg",
    },
  ]);

  return (
    <div className="w-full p-0 h-[450px]">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        className="h-full"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          420: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {sliderImages.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full border"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
