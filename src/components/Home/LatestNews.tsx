import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { latestcard } from '../common/Helper'

const LatestNews = () => {
  return (
    <div className='max-w-[1292px] pt-12.5 max-md:pt-7 max-md:pb-10 pb-[106px] font-inter mx-auto w-full px-3'>
      <div className='flex pb-5.25 border-b border-bordercommon justify-between items-center'>
        <div className='flex items-center max-sm:gap-2 gap-4.5'>
        <h2 className='text-[24px] max-sm:text-[20px] font-semibold'>Our Latest News</h2>
        <span className='text-[13px] text-third'>Our most ordered products.</span>
        </div>
        <Link href="/" className='text-[14px] text-bluebutton whitespace-nowrap font-semibold'>View All</Link>
      </div>
      <div className='w-full pt-[29px]'>
        <div className='flex max-sm:flex-col justify-between gap-2'>
        {latestcard.map((item:any,index:any)=>(
        <div className='flex' key={index}>
        <div className='w-full'>
          <Image className='rounded-xl sm:max-w-[405px] w-full' src={item.imgkink} alt='tire' width={405} height={270}/>
          <div className='max-w-[371] pt-4.25 w-full'>
            <h2 className='text-[24px] max-md:text-[18px] font-semibold leading-[31.2px]'>{item.title}</h2>
            <p className='text-[14px] leading-[22.4px] text-pcommon max-md:pt-2 pt-3 tracking-[-0.4px]'>{item.detail}</p>
            <h3 className='text-[13px] pt-[17px] flex gap-1 text-third'>by<span className='font-semibold'>Sinan</span><span>{item.date}</span></h3>
          </div> 
        </div>
        </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default LatestNews
