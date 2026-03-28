'use client'
import React from 'react'
import { useParams } from 'next/navigation'

export default function page() {
   const params = useParams();
   const { country } = params;
   console.log('parallelCountry', params)
  return (
    <div> <span className='text-amber-300'>{country}</span> is a breathtaking destination filled <br /> with natural wonders and thrilling adventures!</div>
  )
}
