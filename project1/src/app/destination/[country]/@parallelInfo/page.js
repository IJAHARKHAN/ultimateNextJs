'use client'
import React from 'react'
import { useParams } from 'next/navigation'

export default function page() {
   const params = useParams();
   const { country } = params;
   console.log('parallelCountry', params)
  return (
    <div>Parallel Info for {country}</div>
  )
}
