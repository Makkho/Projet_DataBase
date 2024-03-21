import React from 'react'
import Link from 'next/link';



export const Header = () => {
  return (
    <div className='flex justify-between bg-green-600'>
        <Link href="/">Home</Link>
        <Link href="/add">Add</Link>
      
    </div>
  )
}

