"use client"
import React from 'react'
import { Heart} from './Icons'
import { useRouter } from 'next/navigation'
import { it } from 'node:test'

const ProductCard = ({item}:any) => {
    const route =useRouter()

  return (
   <div onClick={()=>route.push(`/${item.title.toLowerCase().replace(/\s+/g, "").replace(/[^\w\s]/g, "")}`)}>
  
<div className='relative cursor-pointer'>
    <div className='border-bordercommon rounded-xl w-full border'>
        <img className='flex mx-auto' src={item.productimage} alt="oil" width={228} height={228} />
        <div className='absolute right-2 top-2'>
     <Heart />    
     </div>   
       <span className='absolute left-2.5 top-2 p-1 rounded-[4px] bg-bluebutton text-white text-[11px] font-semibold'>{item.descount}%</span>
    </div>
      
    
    <h2 className='font-inter text-[14px] pt-[11px] line-clamp-1 leading-[21.7px] font-[500] -tracking-[0.28px]'>{item.title}</h2>
<div className='flex font-semibold pt-[10.99px] items-center'>
<span className='text-greenprimary text-[22px] font-semibold '>${item.realprice}</span>
<del className='text-[#94A3B8] text-[16.5px] leading-[25.92px] pl-1.5'>${item.lessprice}</del>
</div>
<div className='pt-3 mt-3.25 border-t border-bordercommon'>
    <div className='h-1.25 w-full rounded-2xl bg-redsecondary'></div>
    <div className='flex pt-2 font-inter font-normal justify-between'>
        <h2 className='text-third'>Avaliable:<span className='font-bold text-black -tracking-[0.4px]'>{item.avalaible}</span></h2>
        <h2 className='text-third'>Sold:<span className='font-bold text-black'>{item.sold}</span></h2>
    </div>
    <p className='text-[12px] mt-4.5 border-t pt-3.5'>Time remaining in the campaign:</p>
    <div className='flex pt-3 gap-1'>
    <b className='border px-2 py-2.25 flex gap-0.25 rounded-xl font-semibold text-[12px] border-third'>{item.day}<span className='text-inputgray'>d</span></b>
    <b className='border px-2 py-2.25 flex gap-0.25 rounded-xl font-semibold text-[12px] border-third' >{item.hour}<span className='text-inputgray'>h</span></b>
    <b className='border px-2 py-2.25 flex gap-0.25 rounded-xl font-semibold text-[12px] border-third' >{item.min}<span className='text-inputgray'>m</span></b>
    <b className='border px-2 py-2.25 flex gap-0.25 rounded-xl font-semibold text-[12px] border-third' >{item.sec}<span className='text-inputgray'>s</span></b>
    </div>
    {item.sold?<div>
        
    </div>:''}
    <button className='bg-[#0067B2] hover:bg-[#0067B2]/80 cursor-pointer font-semibold text-white rounded-xl mt-[11.99px] text-[12px] p-2.5 w-full text-center'>Add to cart</button>
</div>

</div>  

    
   </div>
  )
}

export default ProductCard
