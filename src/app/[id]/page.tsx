"use client"
import CardDetail from '@/components/Home/CardDetail'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
   const param=useParams()
  return (
    <div>
      
      <CardDetail id={param.id}/>
    </div>
  )
}

export default page
