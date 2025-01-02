import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


export default function () {
  return (
    <div className='flex justify-center w-full max-w-[1440px] h-full bg-black'>
        <div className='flex flex-wrap justify-center text-center w-auto text-white mt-4  mr-8'>
          <div className='flex  gap-2'>
           <p className='font-light'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
           </div>
           <div className='flex justify-center gap-1 ml-2 '>
           <p className='font-semibold underline underline-offset-5 '>ShopNow</p>
            <p className='font-light'>English</p>
            <IoIosArrowDown  className='m-1 w-6 h-5'/>

           </div>
        </div> 
      
    </div>

  )
}
