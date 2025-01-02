import Image from 'next/image'
import React from 'react'
import { products } from "../products/data"
import { RiDeleteBin7Fill } from "react-icons/ri";

export default function shopCart() {
  const productadd = products.filter((prod) => 
    ['1', '2', '3'].includes(prod.id)
  ) 
   return (
    <div className='w-auto h-full'>
        <div className='flex justify-center p-4 '>
          <h1 className='text-2xl font-bold'>
          Shopping Cart
          </h1>
        </div>
        
        <div className='flex flex-col lg:flex-row justify-between gap-6 p-4'> 
        {/* Product List */}
        <div className="w-full lg:w-2/3 bg-white shadow-md p-4">
          <ul className="flex justify-between gap-4 py-4 text-sm bg-slate-50 p-3">
            <li className="flex-1 text-center">Product</li>
            <li className="flex-1 text-center">Price</li>
            <li className="flex-1 text-center">Quantity</li>
            <li className="flex-1 text-center">Subtotal</li>
          </ul>
            {/* Cart Items*/}
            {productadd.map((product) => (
            <div
             key={product.id}
             className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-gray-200"
             >            
             <Image src={product.image} alt='logo' width="100" height="100" className='bg-slate-50 rounded-lg'/> 
             <p className="text-center text-sm text-gray-400">
             {product.name}
             </p>
             <p className="flex-1 text-center text-sm text-gray-400">
             {product.price}
              </p>
             <p className="text-center text-sm px-2 border border-gray-300 rounded">
              1
             </p>
             <p className="flex-1 text-center text-sm">Rs.250,000,00</p>
             <RiDeleteBin7Fill className="text-red-500 cursor-pointer hover:text-red-600" />
            </div>

           ))}
       </div>

          {/* Cart Totals */}
        <div className="w-full lg:w-1/4 h-52 lg:mx-10 px-10 bg-orange-50 shadow-md p-4 rounded-lg">
          <h1 className="text-xl font-bold mb-4">Cart Totals</h1>
          <p className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>Rs.250,000,00</span>
          </p>
          <p className="flex justify-between text-sm text-yellow-500 mb-4">
            <span>Total</span>
            <span>Rs.250,000,00</span>
          </p>
          <button className="w-full text-center bg-black text-white hover:bg-yellow-400 px-4 py-2 rounded-lg">
            Check Out
          </button>
        </div>
        </div>
    </div>
  )
}
