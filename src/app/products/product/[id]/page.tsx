"use client";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useCart } from "@/context/CartContext";
import { useState , useEffect } from 'react';
import { FaFacebookF , FaTwitter , FaLinkedinIn , FaHeart } from "react-icons/fa";
import { products } from "../../data"
const ProductDetail = () => {

  // useParam to get Dynamic id
  const params = useParams();
  const { id } = params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div className="text-center text-red-500">Product not found!</div>;
  }

  // Add to cart handle
  const { addToCart } = useCart();
  let [count , setCount] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: count ,
      image: product.image,
    });
    alert("Product added to cart!");
  };


  return (
      <div className="text-gray-600 body-font overflow-hidden">
       <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
           <Image
            alt="ecommerce"
            className="bg-slate-200 p-10 lg:w-1/2 w-full lg:h-[500px] h-64 rounded"
            src={product.image}
            width={100}
            height={100}
            
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <div className="flex">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <div className='mb-4 border-b-2 border-gray-200'>
                <h2 className="text-2xl title-font text-zinc-800 tracking-widest">
                 Rs.{product.price}
                </h2>
             </div>
            <p className="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nulla animi consequuntur cumque excepturi vel, alias maiores corrupti,
            quibusdam dolorum dolorem atque soluta repudiandae eaque accusantium, 
            quae aut saepe id at.
            </p>
            <div className="flex flex-col gap-4 mt-6 items-left pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex flex-col">
                <span className="mr-3 mb-2 text-gray-400">Color</span>
                <div className='flex gap-2'>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              </div>
              <div className="flex items-center ">
                <span className="mr-3 text-gray-400">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option> 
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex  pb-10 border-b-2 border-gray-100 mb-5">
                <div className="flex gap-4 text-black bg-white border-2 border-gray-300 py-2 px-6 focus:outline-none hover:bg-slate-200 rounded-lg">
                <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
                  {count}
                  <button onClick={() => setCount(count + 1)}>+</button>
                </div> 
                
                <button  onClick={handleAddToCart}
                className="bg-indigo-500 hover:bg-indigo-600 text-white mx-4 px-6 py-2 rounded">  
                Add To Cart 
                </button>
                <button className="rounded-full w-10 h-10 bg-red-100 p-0 border-0 hover:text-red-500 inline-flex items-center justify-center text-red-400 ml-4">
                <FaHeart className='size-5'/>
                </button>
            </div>
            <div className=''>
               <p className='text-gray-400 '>SKU <span className='ml-9'>: SS001</span></p>
               <p className='text-gray-400'>Category <span className='pl-1'>: Sofas</span></p>
               <p className='text-gray-400'>Tags <span className='pl-8'>: Sofas,Chair,Home,Shop</span></p>
               <p className='flex text-gray-400 '>Share <span className='flex mx-8 mt-2  gap-6'>:
               <FaFacebookF />
               <FaTwitter />
               <FaLinkedinIn />
               </span>
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>

  
    );
  
}

export default ProductDetail;


