import React, { useState } from "react";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const QuotesSlider = () => {
  const [sliderQuotes, setSliderQuotes] = useState([
    {
      name: "ডক্টর মুহম্মদ শহীদুল্লাহ",
      quote: "জীবনে তিনটি জিনিসের প্রয়োজন- বই, বই এবং বই।",
    },
    {
      name: "প্রমথ চৌধুরী",
      quote:
        "বই কিনলেই যে পড়তে হবে, এটি হচ্ছে পাঠকের ভুল। বই লেখা জিনিসটা একটা শখমাত্র হওয়া উচিত নয়, কিন্তু বই কেনাটা শখ ছাড়া আর কিছু হওয়া উচিত নয়।",
    },
    {
      name: "আর্নেস্ট হেমিংওয়ের",
      quote: "বইয়ের মত এত বিশ্বস্ত বন্ধু আর নেই।",
    },
    {
      name: " মার্ক টোয়েন",
      quote: "ভাল বন্ধু, ভাল বই এবং একটি শান্ত বিবেক: এটি আদর্শ জীবন।",
    },
    {
      name: "টনি মরিসন",
      quote:
        "যদি এমন কোনও বই থাকে যা আপনি পড়তে চান তবে এটি এখনও লেখা হয়নি তবে আপনাকে অবশ্যই এটি লিখতে হবে।",
    },
    {
      name: "দেকার্ত",
      quote: "ভালো বই পড়া মানে গত শতাব্দীর মহৎ লোকের সাথে আলাপ করা।",
    },
    {
      name: "মার্কাস টুলিয়াস সিসারো",
      quote: "বই ছাড়া একটি কক্ষ আত্মা ছাড়া দেহের মত।",
    },
    {
      name: "অস্কার ওয়াইল্ড",
      quote:
        "একজন মানুষ ভবিষ্যতে কী হবেন সেটি অন্য কিছু দিয়ে বোঝা না গেলেও তার পড়া বইয়ের ধরন দেখে তা অনেকাংশেই বোঝা যায়।",
    },
    {
      name: "নেপোলিয়ান",
      quote: "অন্তত ষাট হাজার বই সঙ্গে না থাকলে জীবন অচল।",
    },
    {
      name: "সৈয়দ মুজতবা আলী",
      quote: "বই কিনে কেউ কোনদিন দেউলিয়া হয় না।",
    },
    {
      name: "প্রতিভা বসু",
      quote:
        "বই হচ্ছে শ্রেষ্ঠ আত্মীয়, যার সঙ্গে কোনদিন ঝগড়া হয় না,কোনদিন মনোমালিন্য হয় না।",
    },
  ]);

  return (
    <div className="w-full p-0 h-[140px] mt-[20px] quotes-pagination">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        className="h-full"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {sliderQuotes.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full border overflow-y-auto bg-slate-100 rounded-md">
            <div className="h-full p-5">
              <h6 className="">{`${item.quote}`}</h6>
              <h4 className="mt-3 text-right">{`-- ${item.name}`}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QuotesSlider;
