"use client"
import React from 'react'
import { Star } from '../common/Icons'
import { originalparts, productAfford } from '../common/Helper'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'

const Original_products = () => {
  return (
    <div  className='max-w-[1292px] px-3 pt-[30px] pb-[40px] mx-auto w-full'>
      <div className='flex w-full max-sm:flex-col justify-between'>
        {productAfford.map((afford, index) => (
          <div key={index} className='flex justify-between max-sm:border-b max-sm:border-bordercommon py-5.25 items-center sm:gap-4 gap-2'>
            <div className='flex'>
              <Image className='max-sm:w-10 max-sm:w-15 w-full' src={afford.imglink} alt={afford.imgalt} width={60} height={60} />
            </div>
            <div className='flex  gap-1 flex-col'>
              <h2 className='font-semibold font-inter text-[15px] md:text-base text-herofont sm:leading-6 tracking-[-0.32px]'>{afford.heading}</h2>
              <p className='text-third text-[14px] md:text-base max-sm:text-[12px] font-inter font-normal max-sm:text-center sm:leading-[19.2px] tracking-[-0.4px]'>{afford.content}</p>
            </div>
          </div>
        ))}
        <div>
        </div>
      </div>
      <div className='flex overflow-x-auto justify-between gap-1 items-center pt-10 pb-2'>
        {originalparts.map((originalpart, index) => (
       
           <motion.div drag="x" exit={{opacity:0, translateY:80, scale:1}}  whileHover={{scale:1.1 }} whileTap={{scale:0.8}}  initial={{opacity:0, translateY:80, scale:1}} whileInView={{translateY:0 , opacity:1,transition: { duration: 1 }}} className='flex min-w-[140px] sm:min-w-[160px] lg:min-w-[180px] flex-shrink-0 flex-col rounded-2xl pt-5 pb-4.25 bg-cardgray items-center' key={index}>
            <Image className='max-lg:max-w-25 max-sm:w-15 w-full' src={originalpart.partimg} alt={originalpart.partimgalt} width={120} height={120} />
            <h2 className='md:text-[15px] sm:text-[14px] text-[13px] max-lg:text-[12px] font-semibold text-center font-inter line-clamp-1 sm:leading-[22.5px] -tracking-[0.3px]'>{originalpart.parttitle}</h2>
            <span className='color-ordertitle'>{originalpart.partindex}</span>
          </motion.div>
        
        ))}
      </div>
    </div>
  )
}

export default Original_products
