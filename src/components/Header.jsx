import React from 'react'
import Link from 'next/link';
import { Icon } from '@/icon/Icon';



export const Header = () => {
  return (
    <div className='flex justify-between bg-green-600 font-medium  text-white '>
        <Link href="/">Home</Link>
      <Link href="/Add" scroll={false}>Add</Link>
     <Icon />
      
    </div>
  )
}

