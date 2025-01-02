"use client";

import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';




export default function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex w-full h-20 border-b-2'>
    <div className='flex justify-between w-auto h-auto  m-5'>
        <div className='flex justify-between items-center gap-4 sm:gap-16 md:gap-8 lg:gap-10 '>
            <div className='flex gap-60 '>
            <h1 className='font-bold text-xl'>Exclusive</h1>
             <ul className="hidden lg:flex md:flex gap-6">
                 <li> <Link href="/" className="hover:underline underline-offset-4">Home</Link></li>
                <li> <Link href="/products" className="hover:underline underline-offset-4">Products</Link></li>
                <li> <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
                <li> <Link href="/about" className="hover:underline underline-offset-4">About</Link></li>
                <li> <Link href="/" className="hover:underline underline-offset-4">SignUp</Link></li>
            </ul>
            </div>
            <div className='lg:flex bg-gray-100 rounded-lg'>
                <input type="text" placeholder='What are you looking for?' className='text-gray-500 bg-gray-100 text-xs p-2 rounded-lg'  />
                <div className="flex">
                <IoSearchOutline  className='m-2 w-6 h-6'/>
                <FaRegHeart className='m-2 w-6 h-5' />
                <Link href="/shopCart">
                <RiShoppingCart2Line className='m-2 w-6 h-5'/>
                </Link>
                </div>
            </div>
             {/* Mobile Menu Button */}
         <button
       className="lg:hidden md:hidden text-2xl"
       onClick={toggleMenu}
       aria-label="Open Menu"
     >
       <AiOutlineMenu />
     </button>
     {/* Side Menu */}
     <div
       className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-[250px] transform ${
         isMenuOpen ? 'translate-x-0' : '-translate-x-full'
       } transition-transform duration-300 ease-in-out z-50`}
     >
       {/* Close Button */}
       <button
         className="absolute top-4 right-4 text-2xl"
         onClick={toggleMenu}
         aria-label="Close Menu"
       >
         <AiOutlineClose />
       </button>
       {/* Menu Items */}
       <ul className="flex flex-col items-start gap-6 mt-16 pl-6">
         <li>
           <Link href="/" onClick={toggleMenu}>
             Home
           </Link>
         </li>
         <li>
           <Link href="/products" onClick={toggleMenu}>
             Products
           </Link>
         </li>
         <li>
           <Link href="/contact" onClick={toggleMenu}>
             Contact
           </Link>
         </li>
         <li>
           <Link href="/about" onClick={toggleMenu}>
             About
           </Link>
         </li>
         <li>
           <Link href="/" onClick={toggleMenu}>
             SignUp
           </Link>
         </li>
       </ul>
     </div>
        </div>
    </div>
    
    </div>)

}
