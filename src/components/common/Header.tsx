"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { categories, currencyData, headerLinks, languageData, navlinks } from './Helper'
import { Cart, Garage, Heart, MenuBar, Replace, SidebarOpen, User } from './Icons'
import Dropdown from './Dropdown'
import Sidebar from '../Sidebar'
import Image from 'next/image'
import { CiSearch } from 'react-icons/ci'
import Nav_Dropdown from './Nav_Dropdown'
import { Anybody } from 'next/font/google'
import { AnimatePresence } from 'motion/react'
import { div } from 'motion/react-client'
import { motion } from 'framer-motion'

const Header = () => {
  const [slide,setSlide]= useState(false);
  console.log(slide+"working")
  return (
    <header className='border-b border-grayborderto'>
     
      <div className='bg-bggray'>
        <div className=' max-w-[1292px] px-3 pt-3 w-full mx-auto'>
          <div className='flex max-sm:hidden pb-3.25 border-b-[1px] border-grayborder justify-between'>
            <div className='flex items-center gap-5 text-primary text-[12px] font-normal'>
              {headerLinks.map((headerone, index) => (
                <Link key={index} href={headerone.pagelink}>{headerone.linkname}</Link>
              ))}
            </div>
            <div className='flex max-w-28.5 text-[12px] items-center w-full justify-between'>
              <Dropdown name="English" menuItems={languageData} />
              <Dropdown name="USD" menuItems={currencyData} />
            </div>
          </div>
          <div className='flex w-full justify-between max-md:py-2 py-3.5 gap-2 items-center'>
            <div className='sm:hidden'>
              <SidebarOpen />
            </div>
            <div className='max-w-[183px] max-xl:max-w-[100px] sm:-ml-5 relative w-full h-12'>
              <Image className='top-0 left-0 absolute cursor-pointer' src="/images/logo.png" alt='logo' fill />
            </div>
            <div className='flex justify-between gap-2 max-sm:hidden max-w-[787px] w-full ml-[19px] items-center'>
              <div className='flex max-md:hidden gap-2'>
                <Garage />
                <div className='font-inter gap-[0.89px] flex flex-col'>
                  <span className='text-secondary text-[11px] -tracking-[0.4px] leading-[14.3px] font-normal'>Add Vehicle</span>
                  <span className='whitespace-nowrap'>My Garage</span>
                </div>
              </div>
              <div className='max-w-147.75 max-sm:hidden shadow-[0_1px_2px_0] shadow-inputshadow border border-bordergray rounded-2xl overflow-hidden flex w-full'>
                <input className='w-full text-[15px] outline-none text-inputgray max-lg:py-2 max-xl:py-2.5 indent-3.75 py-3' type='text' placeholder='Search popular products...' />
                <button className='w-11.5 px-3 flex items-center '>
                  <CiSearch />
                </button>
              </div>

            </div>

            <div className='flex max-sm:hidden md:ml-6 gap-2'>
              <User />
              <div className='flex  font-inter my-auto flex-col'>
                <span className='text-secondary leading-[14.3px] -tracking-[0.4px] text-[11px] '>Sign In</span>
                <span className='text-secondary leading-[16.9px] -tracking-[0.4px] font-semibold text-[13px] '>Account</span>
              </div>
            </div>
            <div className='relative max-sm:hidden pl-0.5'>
              <Heart />
              <div className='w-[19px]  text-white flex text-center max-lg:px-0.75 px-1.25 max-md:text-[10px] leading-[17.6px] text-[11px] font-semibold absolute -top-0.75 -right-0.5 w-[19px] max-md:w-[15] max-md:h-[15] h-[19px]  rounded-full bg-primaryred'>0</div>
            </div>
            <div className='relative max-sm:hidden pl-0.5'>
              <Replace />
            </div>
            <div className='relative pl-0.5'>
              <Cart />
              <div className='w-[19px]  text-white flex text-center max-lg:px-0.75 px-1.25 max-md:text-[10px] leading-[17.6px] text-[11px] font-semibold absolute -top-0.75 -right-0.5 w-[19px] max-md:w-[15] max-md:h-[15] h-[19px]  rounded-full bg-primaryred'>0</div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex max-w-[1292px]  max-md:hidden gap-2 px-3  justify-between items-center  py-[20.5px] w-full mx-auto'>
        <div className='flex max-w-[161px] w-full gap-2.5 '>
          <div onClick={()=> setSlide(prev=> !prev)
            }>
          <MenuBar/>
          </div>
          <Dropdown name="USD" menuItems={categories} />
          <span className='w-0.25 h-4 my-auto bg-gray-200'></span>
        </div>
        <div className='flex gap-4 items-center'>
          {navlinks.map((navitem, index) => (
            <nav className='text-[15px] font-semibold max-lg:font-medium leading-[15px] font-inter -tracking-[0.38px]' key={index}>
              {navitem.subcatagory.length === 0 ? <Link className="whitespace-nowrap" href={"/"}>{navitem.pagetitle}</Link> : <Nav_Dropdown pagetitle={navitem.pagetitle} subcatagory={navitem.subcatagory} />}
            </nav>
          ))}
        </div>

        <div className='max-w-[119px] flex w-full justify-between'>
          <h2 className='text-[15px] font-inter font-semibold whitespace-nowrap leading-[24px] -tracking-[0.38]'>Best Seller</h2>
          <button className='bg-redsecondary text-white rounded-sm w-[35.36px] py-1 text-[11px] font-semibold leading-[12.1px] font-inter -tracking-[0.38px]'>Sale</button>
        </div>
      </div>
      <AnimatePresence>
        {slide && 
        <motion.div initial={{scale:0, opacity:0, translateX:-300, translateY:0}} transition={{type: "spring", stiffness: 60, damping: 5,}} animate={{ scale:1, opacity:1,translateX:0, translateY:0, }} exit={{scale:0, opacity:0,translateX:-300, translateY:0}}><Sidebar /></motion.div>
        }
        
      </AnimatePresence>
     
     
     
    </header>
  )
}
export default Header
