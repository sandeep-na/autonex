import React from 'react'
import { navlinks } from './common/Helper'
import Link from 'next/link'
import Nav_Dropdown from './common/Nav_Dropdown'

const Sidebar = () => {
  return (
    <div className='relative max-w-[1292px] px-3 w-full mx-auto'>
       <div className='flex flex-col bg-gray-300/99 z-10 px-10 top-0 h-screen pt-2 gap-4 absolute left-3'>
                {navlinks.map((navitem:any, index:any) => (
                  <div className='text-[15px] font-semibold max-lg:font-medium leading-[15px] font-inter -tracking-[0.38px]' key={index}>
                    {navitem.subcatagory.length === 0 ? <Link className="whitespace-nowrap" href={"/"}>{navitem.pagetitle}</Link> : <Nav_Dropdown pagetitle={navitem.pagetitle} subcatagory={navitem.subcatagory} />}
                 </div>
              ))}
        </div>
    </div>
  )
}

export default Sidebar
