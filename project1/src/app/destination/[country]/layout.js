import React from 'react'

export default function layout({children, parallelInfo}) {
  return (
    <div className='flex'>
      <div className='w-[50%]'>{children}</div>
      <div className='w-50%'>{parallelInfo}</div>        
    </div>
  )
}
