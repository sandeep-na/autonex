import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { relableParts } from '../common/Helper'

const Poskapet = () => {
  return (
    <div className='max-w-[1292px] max-lg:flex-col px-3 font-inter border-b border-bordercommon flex w-full mx-auto'>
      <div className="font-inter lg:max-w-[412px] w-full ">
        <span className="text-inputgray font-extrabold max-sm:text-[12px] uppercase leading-[18px] tracking-[0.3px]">Duis commodo at risus</span>
        <h2 className='text-[48px] max-sm:text-[32px] max-sm:leading-[40px] tracking-[-0.8px] pt-5 font-extrabold leading-[60px] tracking-[-1.2px]'>Poskapet pred det vill säga polyliga <span className="text-inputgray">dekavin eura</span></h2>
        <p className="text-graysmall max-sm:text-[14px] pt-[23px] leading-[25.6px]">Vestibulum condimentum libero elit, at pretium purus molestie ornare. Sed turpis justo, facilisis cursus elit in, lobortis molestie.</p>
        <p className="text-graysmall max-sm:text-[14px] pt-[21px] leading-[25.6px]">Morbi sed rhoncus erat. Aenean quis lacus tellus. Duis commodo at risus sit amet maximus molestie.</p>
        <div className="pt-11.75 max-sm:pt-[23px]">
        <Link className='font-semibold text-[14px] underline leading-[25.6px]' href="/poskapet">Read and Shop Now</Link>
        </div>
      </div>
      <Image  src="/images/carbg.png" alt="poskapet" width={452} height={526} className='max-lg:w-full'/>
      <div className="lg:max-w-[357px] pt-[59px] w-full">
      <div className="flex flex-col">
        <h2 className='text-[18px] max-sm:text-[16px] font-bold tracking-[-0.36px]'>Reliable Parts for Unstoppable Rides.</h2>
        <p className="text-graysmall leading-[25.6px] text-[14px] max-smleading-[21px] tracking-[-0.4px] text-third">Vestibulum condimentum libero elit, at pretium purus molestie ornare. Sed turpis justo, facilisis cursus elit in, lobortis molestie.</p>
      </div>
<div className="pt-5.25">
{relableParts.map((item:any, index:any) => (
      <div key={index} className="pt-5.25 max-sm:pt-0 ">
      <div className="flex border-bordercommon pb-5.75 max-sm:pb-5 border-b gap-4.5">
        <b className=' py-2 bg-bordercommon rounded-ful h-10 max-w-10 px-2 rounded-full w-full'>0{index + 1}</b>
        <div>
        <h3 className='text-[15px] pt-1 font-semibold leading-[22.5px] tracking-[-0.3px]'>{item.title}</h3>
        <p className='text-[14px] leading-[22.4px] tracking-[-0.4px]'>{item.description}</p>
        </div>
      </div>
      </div>
))}
</div>
      </div>
    </div>
  )
}

export default Poskapet
