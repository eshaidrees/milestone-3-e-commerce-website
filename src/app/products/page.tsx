import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { products } from "../products/data"

export default function product() {
const productadd = products.filter((prod) => (prod.id)
  ) 
    return (
    <div className='w-full h-auto bg-slate-100'>
       <h1 className='flex justify-center text-4xl font-semibold p-4'>Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 p-4">
                 {productadd.map((product) => (
                        <Link href={`/products/product/${product.id}`} key={product.id}>
                   <div key={product.id} className="p-4 bg-white rounded-lg shadow-md">
                     <div className="w-full h-60 flex flex-col items-center bg-slate-100 rounded-lg mb-2">
                     <div className='absolute flex justify-between gap-44'>
                         <p className='bg-red-700 text-center rounded-lg m-2 w-14 h-8'>-40%</p>
                         <span className='flex flex-col'>
                         <FaRegHeart className='m-1 w-6 h-5' />
                         <IoEyeOutline  className='m-1 w-6 h-6'/>
                         </span>
                      </div>
                      <div className=' m-10'>
                      <Image src={product.image} alt='image' width={150} height={10} className=' mx-8 '/>
                      </div>
                     </div>
        
                     <h1 className="text-lg font-semibold">{product.name}</h1>
                     <div className='flex gap-2'>
                     <h2 className="text-blue-600 font-medium">{product.price}</h2>
                     <p className="text-gray-600 line-through">{product.oldpriece}</p>
                   </div>
                   </div>
                   </Link>
                 ))}
              </div>
    </div>
          
  )
}

