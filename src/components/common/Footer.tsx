import React from 'react'
import Dropdown from './Dropdown'
import { contactdata, helppage, languageData } from './Helper'
import Image from 'next/image'
import { Facebook, Instagram, Multicircle, Paypal, Skrill, Twitter, Visa, Youtube } from './Icons'
import { SiKlarna } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='font-inter'>
      <div className='bg-grayborderto max-sm:pt-6 max-md:pt-10 pt-15.5'>
    <div className='max-w-323 max-sm:flex-col max-sm:items-center max-sm:text-center flex gap-2 justify-between w-full px-3 mx-auto'>
       <div className='max-w-113.5 w-full'>
        <h2 className='text-[30px] max-md:text-[20px] max-lg:text-[26px] font-bold'>Join the Ignavo VIP Club!</h2>
        <p className='text-[15px] max-md:text-[14px] text-third pt-1.5 leading-6'>Whether you’re welcoming new contacts or sharing the latest news, you can make your business look good in just a few clicks.</p>
       </div>
       <div className='max-w-103.25 pb-14 max-sm:pb-6 w-full'>
        <div className='border py-1.25 bg-white border-bordergray rounded-2xl pr-1.75 flex'>
        <input className='indent-3.75 max-md:text-[14px] outline-none w-full' type='text' placeholder='Enter your email address'/>
        <button className='bg-bluebutton max-md:text-[14px] cursor-pointer max-md:py-1.5 py-3 max-lg:py-2 px-4.5 rounded-lg text-white'>Subscribe</button>
        </div>
        <p className='text-[12px] pl-1.75 pt-5 max-md:pt-3 leading-[19.2px]'>By subscribing you agree to our <span className='font-semibold text-[12px]'>Terms & Conditions</span> and <span className='font-semibold'>Privacy & Cookies</span></p>
       </div>
    </div>
    </div>
    <div className='bg-dark pt-16.75 pb-'>
      <div className='max-w-323 px-3 justify-between pb-16.75 flex w-full mx-auto'>
        <div className='text-white'>
          <h2 className='font-bold text-[15px]'>Contact Us</h2>
          <div className='flex flex-col pt-4.5 gap-6.5'>
            {contactdata.map((item:any,index:any)=>(
          <div key={index} className='pl-10 text-[14px]'>
            <h2 className="font-bold">{item.title}</h2>
            <p className='text-inputgray'>+{item.data}</p>
          </div>
   ))}
        </div>
        </div>
<div className="flex max-w-173.25 w-full justify-between">
       {helppage.map((item: any, index: number) => (
  <div
    key={index}
    className="text-white flex flex-col"
  >
    <h2 className="font-bold pt-4">{item.title}</h2>

    {item.details.map((detail: any, i: number) => (
      <h3 className='text-[14px] pt-2 text-inputgray' key={i}>{detail.item}</h3>
    ))}
  </div>
))}
    </div>
    </div>
    <div className='max-w-323 flex justify-between items-center text-white pt-7.75 pb-8.25 px-3 mx-auto border-t  border-bdark border-b'>
      <Image src={"/images/flogo.png"} alt="footerlogo" width={135} height={44}/>
      <div className='flex items-center gap-2.25'><span>Follow Us:</span>
      <div className='flex gap-1'>
      <Facebook/>
      <Twitter/>
      <Instagram/>
      <Youtube/>
      </div>
      </div>
      <div className='flex items-center gap-2.25'><span>Download App:</span>
      <div className='flex gap-1'>
      <Image src={"/images/playstore2.png"} alt="footerlogo" width={135} height={44}/>
      <Image src={"/images/appstore.png"} alt="footerlogo" width={135} height={44}/>
      </div>
      </div>
    </div>
    <div className='max-w-323 font-inter pt-18.25 pb-17.5 justify-between text-white px-3 flex w-full mx-auto'>
    <p>Copyright 2025 © Autonex  Theme. All right reserved.</p>
    <div className='flex gap-4 items-center'>
      <Multicircle/>
      <Visa/>
      <Paypal/>
      <Skrill/>
      <SiKlarna/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
