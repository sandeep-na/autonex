import React from 'react'

const Finding = () => {
  return (
    <div className='max-w-[1292px] mx-auto w-full px-3'>
      <div className=" bg-bluebutton pt-[23px] max-sm:py-5 pb-[26px] font-inter rounded-2xl px-3 w-full mx-auto">
        <div className='max-w-[1047px] justify-between max-md:flex-col max-md:gap-3 flex w-full mx-auto'>
            <div className='flex gap-2 max-sm:gap-0 text-center flex-col'>
            <h2 className='text-white max-sm:text-[20px] text-[27px] max-lg:text-[22px] font-extrabold'>Need Help Finding the Right Product?</h2>
            <p className='text-[14px] pt-1 text-badcolor'>Our Parts Experts Can Help. Call for immediate assistance.</p>
            </div>
            <div className='flex max-md:justify-between items-center max-lg:gap-3 gap-7.5'>
            <button className='bg-white h-[48px] max-sm:h-[42px] max-sm:w-[130px] max-md:max-w-50 max-lg:text-[14px]  font-semibold w-full rounded-2xl'>Request a Call</button>
            <div className='text-center'>
                <h3 className='whitespace-nowrap text-white text-[22px] max-sm:text-[16px] max-sm:text-[16px] max-lg:text-[18px] font-bold'>+(800) 1234 5678 90</h3>
                <span className='whitespace-nowrap pt-1.25 text-badcolor text-[12px]'>You can contact us 24/7.</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Finding
