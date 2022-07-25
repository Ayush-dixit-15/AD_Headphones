import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href= "/"> AD Headphones </Link>
      </p>
    </div>
  )
}

export default Navbar