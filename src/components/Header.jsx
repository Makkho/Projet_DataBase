import React from 'react'
import Link from 'next/link';



export const Header = () => {
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/add">Add</Link></li>
      </ul>
    </div>
  )
}

