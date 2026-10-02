'use client'

import React from 'react'
import Link from 'next/link'
import { arrivals, newarrival } from '../common/Helper'

import ProductCard from '../common/ProductCard'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const NewArrivals = () => {
  return (
    <div className='max-w-[1292px] py-10 justify-between font-inter  px-3 w-full mx-auto'>
      <div className="justify-between border-third pb-5.25   border-b flex">
        <div className="flex max-w-[563px] justify-between items-center w-full">
          <h2 className='text-6 max-sm:text-[18px] font-semibold'>New Arrivals</h2>
          <div className='flex w-full py-1 gap-4.5'>
            {arrivals.map((arrival, index) => (
              <div key={index}>
                <Link className="font-medium tracking-[-0.4px] max-sm:text-center text-[14px]" href="/">{arrival.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <button className="font-semibold max-sm:hidden text-bluebutton text-[14px]">View All</button>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
              breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {newarrival.map((item, index) => (
          <SwiperSlide>

            <div key={index} className="w-full" >
              <ProductCard item={item}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default NewArrivals
