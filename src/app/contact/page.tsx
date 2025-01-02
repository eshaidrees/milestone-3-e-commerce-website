import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <div>
         <div className='w-full max-w-screen mx-auto p-4 md:p-8 '>

          {/* contact */}
          <div className='flex flex-wrap justify-center items-start pt-20 py-10 mt-6'>
          
          <div className='flex flex-col gap-10 w-full md:w-1/2 lg:w-1/3'>
           {/* Phone Block */}
           <div className='flex items-start'>
           <FiPhone className='size-9 bg-red-500 text-white mr-6 p-2 rounded-2xl' />
           <div>
             <h1 className='font-semibold text-xl pb-4'>Call To Us</h1>
             <p>We are available 24/7, 7 days a week.</p>
             <p>Phone: +8801611112222</p>
           </div>
         </div>

          {/* Email Block */}
         <div className='flex items-start'>
           <FaRegEnvelope className='size-9 bg-red-500 text-white mr-6 p-2 rounded-2xl' />
           <div>
             <h1 className='font-semibold text-xl pb-4'>Write To US</h1>
             <p>Fill out our form and we will contact <br /> you within 24 hours.</p><br />
             <p>Emails: customer@exclusive.com</p><br />
             <p>Emails: support@exclusive.com</p>
           </div>
         </div>

         </div>
             {/* form */}
           <div className="w-full md:w-1/2 lg:w-1/2 ">
              <form className='flex flex-col gap-6 m-4'>

               <div className='flex gap-6'>
              <input type="text" id="name" name="name" placeholder="Your name" required className="w-full p-3 px-5 mb-3 border bg-gray-200 placeholder:text-gray-500 rounded-lg" />
              <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full p-3 px-8 mb-3 border bg-gray-200 placeholder:text-gray-500 rounded-lg" />
              <input type="text" id="text" name="text" placeholder="Your Phone" className="w-full p-3 px-5 mb-3 border bg-gray-200 placeholder:text-gray-500 rounded-lg" />
              </div>

              <textarea id="message" name="message" placeholder="Your Message" required className="w-full p-5 h-40 mb-3 border bg-gray-200 placeholder:text-gray-500 rounded-lg"></textarea>
            <div className='flex justify-end'>
              <button type="submit" className="border-2 bg-red-500 text-center p-2 md:mr-52 text-white hover:bg-gray-300 rounded-lg">
                Send Message
              </button>
            </div>
            </form>
         </div>
       </div>
    </div>
    </div>
  )
}
