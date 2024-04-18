import React from 'react'
import Link from 'next/link';
//import { Icon } from '@/icon/Icon';



export const Header = () => {
  return (
    <div className='flex justify-between bg-green-600 font-medium  text-white text-2xl '>
        <Link href="/">Home</Link>
      <Link href="/create_forum" scroll={false}>Add</Link>
      
    </div>
  )
}

