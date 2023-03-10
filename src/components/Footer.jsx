import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white px-8 w-full flex justify-between flex-wrap mx-auto items-center py-[5rem]'>
        <div className='flex flex-wrap w-full justify-between mx-auto mb-12 lg:mb-0 lg:max-w-[60%] gap-4 px-8'>
            <div>
                <ul>
                    <li className='font-bold py-2'>SOLUTIONS</li>
                    <li className='py-1 text-lg'>Travel</li>
                    <li className='py-1 text-lg'>Booking</li>
                    <li className='py-1 text-lg'>Flights</li>
                    <li className='py-1 text-lg'>Cruises</li>
                    <li className='py-1 text-lg'>Ground</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold py-2'>SUPPORT</li>
                    <li className='py-1 text-lg'>Pricing</li>
                    <li className='py-1 text-lg'>Documentation</li>
                    <li className='py-1 text-lg'>Tours</li>
                    <li className='py-1 text-lg'>Refunds</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold py-2'>COMPANY</li>
                    <li className='py-1 text-lg'>About</li>
                    <li className='py-1 text-lg'>Blog</li>
                    <li className='py-1 text-lg'>Job</li>
                    <li className='py-1 text-lg'>Press</li>
                    <li className='py-1 text-lg'>Partners</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold py-2'>LEGAL</li>
                    <li className='py-1 text-lg'>Claims</li>
                    <li className='py-1 text-lg'>Privacy</li>
                    <li className='py-1 text-lg'>Terms</li>
                    <li className='py-1 text-lg'>Policies</li>
                    <li className='py-1 text-lg'>Conditions</li>
                </ul>
            </div>
        </div>
        <div className='mx-auto h-full flex flex-col justify-center'>
            <h2 className='font-bold py-2'>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p className='my-4'>The latest, articles and resources sent to your inbox weekly</p>
            <form className='flex flex-wrap gap-[2rem]'>
                <input className='rounded-xl px-2 py-3 text-black italic outline-xl ring-xl border-2 bg-transparent' type='text' placeholder='Enter Email...' />
                <button className='bg-white text-black px-6 py-3 font-bold'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Footer