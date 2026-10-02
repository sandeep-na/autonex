"use client";

import React, { useRef } from "react";
import { GreenStar, InfoIcon, SmallGreen } from "../common/Icons";
import { cardswiper } from "../common/Helper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Excellent = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="max-w-[1292px] px-3 max-lg:flex-col flex sm:pt-10 pt-5 w-full mx-auto font-inter max-sm:gap-7 gap-8">
      {/* Left Content */}
      <div className="flex sm:max-w-55 w-full flex-col items-center gap-2.5">
        <h2 className="font-semibold max-sm:text-[18px] text-[22px] leading-8">
          Excellent
        </h2>

        <div className="flex gap-0.5">
          <GreenStar />
          <GreenStar />
          <GreenStar />
          <GreenStar />
          <GreenStar />
        </div>

        <h3 className="text-[12px] tracking-[-0.4px] text-third leading-[19.2px]">
          Based on{" "}
          <span className="underline font-bold">
            2,147 reviews
          </span>
        </h3>

        <p className="text-[12px] text-center leading-[19.2px] tracking-[-0.4px]">
          All comments are from real users who have made purchases before.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-[1086px] w-full gap-5 relative sm:px-15">
        {/* Prev Button */}
        <button
          ref={prevRef}
          className="w-16 max-sm:w-12 max-sm:hidden max-sm:h-12 h-16 absolute top-10 left-0 rounded-full border-2 border-gray-300 flex items-center justify-center shrink-0 hover:bg-gray-100 transition"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-semibold uppercase">
            Prev
          </span>
        </button>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="w-full"
        >
          {cardswiper.map((card: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex max-sm:items-center flex-col max-sm:px-2 p-4">
                <div className="flex gap-2">
                  <div className="flex gap-0.5">
                    <SmallGreen />
                    <SmallGreen />
                    <SmallGreen />
                    <SmallGreen />
                    <SmallGreen />
                  </div>
                  <h2 className="flex gap-1 whitespace-nowrap font-medium text-third text-[11px]">
                    <InfoIcon />
                    Purchased user
                  </h2>
                </div>
                <h2 className="font-semibold pt-3 text-[15px] leading-[22px]">
                  {card.title}
                </h2>
                <p className="text-[12px] max-sm:w-[222px] pt-2 leading-[19px] text-graysmall">
                  {card.detail}
                </p>
                <h3 className="font-semibold text-[12px] pt-4 text-graysmall">
                  {card.username}
                  <span className="pl-2 text-inputgray text-[11px] font-normal">
                    3 days ago
                  </span>
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <button
          ref={nextRef}
          className="w-16 max-sm:w-12 h-16 max-sm:hidden max-sm:h-12 absolute right-0 top-10 rounded-full border-2 border-gray-300 flex items-center justify-center shrink-0 hover:bg-gray-100 transition"
        >
          <span className="[writing-mode:vertical-rl] text-[10px] font-semibold uppercase">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default Excellent;