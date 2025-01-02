import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className='lg:flex justify-center gap-6'>
        <div className='h-1/2 w-full lg:w-1/2 lg:ml-20 m-4 p-6 mt-20'>
            <h1 className='text-4xl font-bold pb-6'>Our Story</h1>
            <p className='text-sm'>Launced in 2015, Exclusive is South Asia's premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported  by <br />  wide range of tailored marketing, data and service solutions,  <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br />  millioons customers across the region. </p> <br />
            <p className='text-sm'>Exclusive has more than 1 Million products to offer, growing at a <br />  very fast. Exclusive offers a diverse assotment in categories <br />  ranging  from consumer.</p>
        </div>
        <div className='h-1/2 w-full lg:w-1/2 lg:m-20 m-4'>
           <Image src="/images/about-image.jpg" alt='image' width="500" height="500" />
        </div>
    </div>
  )
}
