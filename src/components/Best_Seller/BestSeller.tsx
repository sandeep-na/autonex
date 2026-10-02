"use client"
import ProductCard from '../common/ProductCard'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productitems } from '../common/Helper';
import 'swiper/css';
import 'swiper/css/pagination';

const BestSeller = () => {
  return (
    <div>
      <div className='max-w-[1292px] px-3 w-full mx-auto'>
        <div className='w-full border-bordercommon pb-5.25 border-b font-inter flex ' >
            <div className='flex w-full sm:gap-4.5 gap-2 items-center'>
            <h2 className='md:text-[24px] sm:text-[20px] text-[18px] font-semibold'>Best Seller</h2>
            <p className='text-[13px] max-sm:text-[12px] text-third font-[400]'>Our most ordered products.</p>
            </div>
            <span className='whitespace-nowrap flex items-center sm:text-[14px] text-[12px] -tracking-[0.4px] leading-[14.3px] font-semibold text-[#0067B2]'>View All</span>
        </div>
        
        <Swiper
        spaceBetween={30}
        
         
      
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
        className="mySwiper !pb-10"
      >
        {productitems.map((productitem,index)=>(
        <SwiperSlide key={index} className='mt-7.5'> <ProductCard item={productitem} /> </SwiperSlide>
         ))}

      </Swiper>
      </div>
      
  <div className='sm:pb-17 pb-5'></div>
    </div>
  )
}

export default BestSeller
