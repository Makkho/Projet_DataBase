import React from 'react'
import Link from 'next/link';




export const Header = () => {
  return (
   <div className='justify-between flex p-4 bg-green-600 font-medium text-white text-2xl'>
        <Link href="/">Home</Link>
      <Link href="/create_forum" scroll={false}>Add</Link>
      <img src="@/icon/ia.png" alt="Logo" className="w-6 h-6 mr-2" />
      
    </div>
  )
}

