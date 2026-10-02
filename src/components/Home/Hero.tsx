
"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import Marquee from "react-fast-marquee";
import { heroswiper } from '../common/Helper';

const Hero = () => {
  return (
    <div className='max-w-[1292px] px-3  font-inter w-full mx-auto'>
    
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {heroswiper.map((item,index)=>(
        <SwiperSlide key={index}>
          <div className='w-full flex max-sm:flex-col  justify-between'>
        <div className='max-w-[570px] max-md:pt-[70px] pt-[96px] max-sm:pt-7.5 w-full'>
            <span className='uppercase text-third text-[12px] font-semibold leading-[18px] tracking-[0.6px]'>{item.topic}</span>
            <h1 className='text-[66px] max-sm:text-[36px] max-sm:leading-10 max-sm:font-extrabold mt-[14px] max-lg:text-[50px] leading-[72.6px] -tracking-[1.65px] max-sm:tracking-[-0.9px] font-extrabold'>{item.title}</h1>
            <p className='text-lg max-md:text-[16px] mt-[7.59px] text-third'>{item.detail}</p>
            <button className='max-w-38 mt-[30.8px] bg-bluebutton cursor-pointer font-semibold text-sm font-inter text-white rounded-md leading-[14px] font-medium -tracking-[0.28px] py-3 w-full'>View All Products</button>
            <p className='text-inputgray mt-[19px] font-inter font-regular text-[12px] leading-[13.2px] -tracking-[0.4px]'>{item.time}:</p>
        </div>
      <div className=''>
        <Image className="max-sm:mx-auto" src="/images/heroimg.png" alt="fuletank" width={435} height={536}/>
      </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      <div className='w-full border-t border-b border-bordercommon'>
        <Marquee>
          <Image src="/images/isuzu.png" alt='com' width={161} height={46}/> 
          <Image src="/images/dacia.png" alt='com' width={161} height={46}/> 
          <Image src="/images/honda.png" alt='com' width={161} height={46}/> 
          <Image src="/images/peugeot.png" alt='com' width={161} height={46}/> 
          <Image src="/images/porsche.png" alt='com' width={161} height={46}/> 
          <Image src="/images/isuzu.png" alt='com' width={161} height={46}/> 
           <Image src="/images/tesla.png" alt='com' width={161} height={46}/> 
           <Image src="/images/peugeot.png" alt='com' width={161} height={46}/> 
          
  </Marquee>
      </div>
    </div>
    
  )
}

export default Hero
