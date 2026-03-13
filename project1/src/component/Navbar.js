'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const path = usePathname();
    // console.log('Current path:', path);
  return (
    <div className='w-full h-20 bg-white flex items-center justify-between px-10 text-black sticky top-0 z-10'>
        <div className='font-bold text-2xl'>🌐 UI Next App</div>
        <div>
            <ul className='flex gap-5'>
                <li> <Link href="/" className={path === '/' ? 'text-blue-500' : ''}>Home</Link> </li>
                <li> <Link href="/destination" className={path === '/destination' ? 'text-blue-500' : ''}>Destination</Link> </li>
                <li> <Link href="/contact" className={path === '/contact' ? 'text-blue-500' : ''}>Contact Us</Link> </li>
            </ul>
        </div>
    </div>
  )
}
