import React from 'react'
import Image from 'next/image';
import { FaApple , FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { products } from '../products/data';

export default function Homepage() {
  
  const FilterProduct = products.filter((prod) => ["1","2","3","4"].includes(prod.id))

  return (
    <>
  <div className="flex flex-col lg:flex-row">
  <div className="w-52 h-auto m-4 lg:m-8">
      <ul className="text-base flex flex-col gap-3 m-2 border-2 rounded-sm p-2">
        <li>Woman s Fashion</li>
        <li>Men s Fashion</li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </div>
    <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-[892px] h-auto lg:h-[344px] bg-black m-4 lg:m-10">
      {/* Text Section */}
      <div className="text-white m-4 mx-20 p-4 lg:ml-16 lg:m-14 flex flex-col justify-center">
        <div className="flex gap-2 mb-4 items-center">
          <FaApple className="text-lg" />
          <p className="text-sm">iPhone 14 Series</p>
        </div>
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">Up to 10%</h1>
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">off Voucher</h1>
        <p className="mb-2 text-sm underline underline-offset-4">Shop Now</p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center lg:ml-20">
        <Image src="/images/pic-1.jpg"  alt="image"  width="450"  height="300"  className="max-w-full lg:w-auto mt-14 m-4 lg:mt-9 p-1"/>
      </div>
    </div>

    </div>

    <div className="w-auto h-auto m-5">
  {/* Top Section */}
  <div className="w-full h-auto mb-10 border-2 rounded-lg p-4">
    <h1 className="border-l-4 border-red-700 text-sm lg:text-base text-red-700 pl-2 mb-2">
      Today's
    </h1>
    <div className="flex flex-col lg:flex-row items-center gap-6">
      {/* Title */}
      <h1 className="text-xl lg:text-2xl font-semibold">Flash Sales</h1>
      {/* Countdown Timer */}
      <div>
        <ul className="flex gap-2 lg:gap-4 justify-center text-sm lg:text-base">
          <li>Days</li>
          <li>Hours</li>
          <li>Minutes</li>
          <li>Seconds</li>
        </ul>
        <ul className="flex gap-1 lg:gap-5 justify-center text-lg lg:text-xl font-bold">
          <li>03</li>
          <li>:</li>
          <li>23</li>
          <li>:</li>
          <li>19</li>
          <li>:</li>
          <li>56</li>
        </ul>
      </div>
    </div>
  </div>
           {/* Product  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
         {FilterProduct.map((product) => (
           <div key={product.id} className="p-4 bg-white rounded-lg shadow-md">
             <div className="w-full h-60 bg-slate-100 rounded-lg mb-2">
             <div className='absolute flex justify-between gap-40'>
                 <p className='bg-red-700 text-center rounded-lg m-2 w-14 h-8'>-40%</p>
                 <span className='flex flex-col'>
                 <FaRegHeart className='m-1 w-6 h-5' />
                 <IoEyeOutline  className='m-1 w-6 h-6'/>
                 </span>
              </div>
             <Image src={product.image} alt='image' width={200} height={10} className='mx-6 p-2 pt-6'/>
             </div>

             <h1 className="text-lg font-semibold">{product.name}</h1>
             <div className='flex gap-2'>
             <h2 className="text-blue-600 font-medium">{product.price}</h2>
             <p className="text-gray-600 line-through">{product.oldpriece}</p>
           </div>
           </div>
         ))}
      </div>

    </div>
    </>
  )
}
