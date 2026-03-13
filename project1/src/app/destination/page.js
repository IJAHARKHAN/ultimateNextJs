'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page() {

  const destinations = [
    { id: 1, name: 'India' },
    { id: 2, name: 'Australia' },
    { id: 3, name: 'Africa' },
  ];

  const route = useRouter();

  const handleDestinationClick = (name) => {
    route.push(`/destination/${name}`);
  }
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center flex-col gap-5 text-[20px]">
      <div > This is my destination page. </div>
      {destinations.map((destination) => (
        <div key={destination.id} className='bg-white text-black p-4 rounded-sm hover:bg-gray-300 transition cursor-pointer' onClick={() => handleDestinationClick(destination.name)}>
          {destination.name}
        </div>
      ))}
      
    </div>
  )
}
