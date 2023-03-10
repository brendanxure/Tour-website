import React from 'react'

const Rooms = () => {
  return (
    <div className='w-full my-20 mb-4 px-10 h-full'>
        <div className='max-w-[1500px] mx-auto flex relative h-full flex-col md:flex-row'>
            <div className='w-full absolute top-0 left-0 bg-blue-100 h-[80%]'></div>
            <div className='md:w-[50%] flex flex-col justify-center z-10 px-4'>
                <h1 className='text-3xl font-bold my-3'>Fine Interior Rooms</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil assumenda id sint commodi labore minima, libero ipsam dolore voluptates magnam.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full relative mt-12'>
                <img className='object-cover w-full h-full p-3' src='https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <img className='row-span-2 object-cover w-full h-full p-3' src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <img className='object-cover w-full h-full p-3' src='https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Rooms