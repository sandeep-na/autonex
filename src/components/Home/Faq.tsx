
"use client"
// import React, { useState } from 'react'
import { Dropdownbtn } from '../common/Icons'
import { faqpage } from '../common/Helper'
import { useState } from 'react'



const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const handleClick = (index:any) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }
  return (
    <div className='max-w-[1292px] max-lg:pt-10 pt-[60px] font-inter w-full mx-auto px-3'>
      <div className='flex gap-5 max-md:flex-col justify-between'>
        <div className='bg-[url("/images/faqboy.png")] rounded-xl bg-bgw h-[510px] max-sm:h-[320px] max-sm:pt-5 max-sm:pl-5 pt-10 pl-10 bg-no-repeat bg-cover md:max-w-[515px] w-full'>
          <h2 className='text-[36px] max-sm:text-[24px] max-sm:max-w-[210px] max-sm:leading-[30px] max-md:text-[30px] leading-[45px] sm:pt-2.25  max-w-[326px] font-extrabold w-full tracking-[-0.9px]'>Questions you may be curious about.</h2>
          <p className='text-[14px] max-sm:pt-2.25 text max-w-[280px] max-sm:max-w-[210px] w-full leading-[22.4px] text-herofont pb-5.25 '>Item currently in stock. Items with this status
            are shipped within 4–5 days of payment.</p> 
          <div className='flex flex-col'>
            <span className='text-[14px] leading-[22.4px] text-herofont tracking-[-0.4px]'>Do you need more information?</span>
            <button className='max-w-[127px] text-[12px] rounded-3xl text-white w-full pt-2.25 mt-5.5 bg-bluebutton pb-2.5'>More Information</button>
          </div>
        </div>
        <div className='flex flex-col max-w-[719px] w-full'>
          {faqpage.map((item: any, index: any) => (
            <div key={index} className='max-w-[719px] flex flex-col w-full'>
              <div onClick={() => { handleClick(index) }} className='flex pt-3.25 pb-[15px] px-2.5 border-b justify-between'>
                <h2 className='font-semibold text-[19px] leading-[30.4px] tracking-[-0.4px]'>{item.title}</h2>
                <span><Dropdownbtn /></span>
              </div>
              <div className={openIndex === index ? "block" : "hidden"}>
                <p className='text-graysmall max-lg:pt-6 pl-2.5 pr-3.5 pt-8 text-[15px] leading-[24px] -tracking-[0.4]'><span className='font-bold'>This is the third item’s accordion body.</span> It is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
                  overriding our default variables. It’s also worth noting that just about any HTML can go within the .accordion-body  , though the transition does limit overflow.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Faq
