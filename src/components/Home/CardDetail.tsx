import Image from 'next/image'
import React from 'react'
import { productitems } from '../common/Helper'
import { YellowStar } from '../common/Icons'

const CardDetail = ({id}:any) => {
  const data = productitems.find((items)=> items.title.toLowerCase().replace(/\s+/g, "").replace(/[^\w\s]/g, "")==id)
  return (
    <div>
    {data ?
    <div>
      
      <div className='max-w-[1292px] px-3 font-inter flex justify-between w-full mx-auto'>
        <Image src={data.productimage} width={400} height={300} alt='oil' />
        <div className='mt-15 max-w-120 w-full'>
          <h2 className='text-2xl font-bold'>{data.title}</h2>
          <p className='text-md font-semibold pt-2'>Visit to store</p>
           <div className='flex gap-1 pt-3 '>
            <YellowStar/>
            <YellowStar/>
            <YellowStar/>
            <YellowStar/>
            <YellowStar/>
          </div>
          <div className='flex items-center pt-4 gap-3'>
            <p>Price : </p>
            <h2 className='text-xl text-greenprimary font-bold'>${data.realprice}</h2>
            <del>${data.lessprice}</del>
          </div>
          <div className='flex gap-3 pt-4'>
            <h2 className='text-md font-semibold'>Avaliable : {data.avalaible}</h2>
            <h2 className="text-md font-semibold">Sold : {data.sold}</h2>
          </div>
         
          <button className='border cursor-pointer hover:bg-blue-300/90 max-w-100 w-full mt-3 py-1 rounded-2xl bg-blue-300 text-white px-5'>Buy Now</button>
        </div>  
      </div>
    </div> :<h1>Data Not Found</h1>}
    
    </div>
  )
}

export default CardDetail

