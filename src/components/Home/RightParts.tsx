import React from 'react'
import Dropdown from '../common/Dropdown'
import { languageData } from '../common/Helper'
import RightPartDropdown from '../common/RightPartDropdown'

const RightParts = () => {
  return (
    <div className='max-w-323 px-3 font-inter w-full mx-auto'>

      <h2 className="md:text-[28px] sm:text-[24px] text-[20px] font-inter relative z-1 text-center font-semibold leading-[33.6px] -tracking[0.56px] before:content-[''] before:absolute before:left-0 before:top-[50%] before:bg-[#cccccc] before:w-[35%] before:h-px after:content-[''] after:absolute after:right-0 after:top-[50%] after:bg-[#cccccc] after:w-[35%] after:h-px">Find the Right Parts Faster</h2>
      <p className='text-[15px] max-w-[736.94px] w-full text-center mx-auto font-inter text-third pt-4.5 max-sm:pb-[33px] pb-13.5'>Having the right automotive parts and car accessories will help you to boost your travel comfort and go on the long-distance journey comfortably that you have been planning.</p>
      <div className='bg-bordercommon items-center rounded-xl  max-sm:py-4 grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 w-full'>
        <RightPartDropdown />
        <RightPartDropdown />
        <RightPartDropdown />
        <RightPartDropdown />
        <button className='sm:max-w-41.25 max-md:text-[14px] max-sm:mt-1.5 max-sm:mx-auto cursor-pointer hover:bg-bluebutton/80 bg-bluebutton ml-2.5 mr-7.5 w-full h-11.5 text-white rounded-2xl'>Find Auto Parts</button>
      </div>
      <p className="sm:pt-5.5 pt-3 text-center text-[12px] text-third leading-[19.2px] tracking-[-0.4px]">You can find the product you are looking for faster by entering the search criteria correctly.</p>
      <div className='h-px w-full max-sm:mt-7 mt-12 bg-bordercommon'></div>
    </div>
  )
}
export default RightParts
