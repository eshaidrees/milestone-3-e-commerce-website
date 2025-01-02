import React from 'react'
import { FaFacebookF, FaInstagram , FaTwitter , FaLinkedinIn} from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
      <div className='w-full h-auto bg-black flex flex-col md:flex-row justify-center items-end px-20'>
        <div className='w-full h-auto text-white '>
            {/* footer */}
            <div className='flex flex-col md:flex-row justify-center h-auto gap-14 my-10'>
            
            <div className="flex flex-col gap-4  w-52">
                <h1 className='flex text-2xl font-bold gap-2'>
                Exclusive
                </h1>
                <h1 className='flex text-xl font-semibold gap-2'>
                Subscribe
                </h1>
                <p className=' text-gray-300'>Get 10% off your first order</p>
                <input type="text" className='bg-transparent border-2 p-2 rounded-md' placeholder='Enter Your Email' />
            </div>
            <div className="flex flex-col gap-4  w-52">
            <h1 className='font-bold pb-2 '>Support</h1>
            <p className='text-gray-300 pb-2'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p className='text-gray-300 pb-2'>exclusive@gmail.com</p>
                <p className='text-gray-300 pb-2'>+88015-88888-9999</p>

            </div>
            <div className="flex flex-col gap-4 w-52">
                <h1 className='font-bold pb-2 '>Account</h1>
                <p className='text-gray-300 '>My Account</p>
                <p className='text-gray-300 '>Login / Register</p>
                <p className='text-gray-300'>Cart</p>
                <p className='text-gray-300 '>Wishlist</p>
                <p className='text-gray-300 '>Shop</p>

            </div>
            <div className=" w-52">
                <h1 className='font-bold pb-2 '>Quick Link</h1>
                <ul className="flex flex-col gap-6">
                   <li> <Link href="/" className='text-gray-300 hover:underline underline-offset-2'>Home</Link></li>
                   <li> <Link href="/products" className='text-gray-300 hover:underline underline-offset-2'>Products</Link></li>
                   <li> <Link href="/contact" className='text-gray-300 hover:underline underline-offset-2'>Contact</Link></li>
                   <li> <Link href="/about" className='text-gray-300 hover:underline underline-offset-2'>About</Link></li>
               </ul>
            </div>
            <div className=" w-52 gap-2">
                <h1 className='text-2xl font-bold pb-3'>Download App</h1>
                <p className='text-gray-300 pb-3'>Save $3 with App New User Only</p>
                {/* Social Links */}
                <div className='flex gap-4'>
                <FaFacebookF/>
                <FaTwitter/>
                <FaInstagram/>
                <FaLinkedinIn/>
                </div>
            </div>
             
            </div>
            <div className='text-center text-gray-600 p-2  border-t-2 border-zinc-950 '>
              <p>Copyright Rimel 2022. All right reserved</p>
            </div> 
        </div>
     </div>  
  )
}
