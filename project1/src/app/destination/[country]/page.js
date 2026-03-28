import React from 'react'
import imgIndia from '@/assets/img/imgIndia.jpg'
import imgAus from '@/assets/img/imgAus.jpg'
import imgAfrica from '@/assets/img/imgAfrica.jpg'
import Image from 'next/image';

export default async function page({ params }) {
  const { country } = await params;
  return (
    <>
    <div> <span className='text-yellow-500'>{country}</span> is the best place to visit!</div>
    <div className='mt-2'>
      {country === 'India' && <Image src={imgIndia} alt='India' className='w-[400px] h-[300px] object-cover' />}
      {country === 'Australia' && <Image src={imgAus} alt='Australia' className='w-[400px] h-[300px] object-cover' />}
      {country === 'Africa' && <Image src={imgAfrica} alt='Africa' className='w-[400px] h-[300px] object-cover' />}
    </div>
    </>
  )
}
