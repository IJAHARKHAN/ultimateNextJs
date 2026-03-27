import React from 'react'

export default async function page({ params }) {
  const { country } = await params;
  return (
    <div> <span className='text-yellow-500'>{country}</span> is the best place to visit!</div>
  )
}
