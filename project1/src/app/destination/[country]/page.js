import React from 'react'

export default async function page({ params }) {
  const { country } = await params;
  return (
    <div>Country:  {country}</div>
  )
}
