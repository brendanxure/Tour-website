import React from 'react'

const Plans = () => {
  return (
    <div className='max-w-[1640px] px-4 md:px-10 mx-auto flex flex-col lg:flex-row gap-6 mb-8'>
        <div className='grid grid-cols-2 grid-rows-6 h-[700px] lg:w-[50%]'>
            <img className='object-cover w-full h-full p-3 row-span-3' src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <img className='object-cover w-full h-full p-3 row-span-2' src='https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <img className='object-cover w-full h-full p-3 row-span-2' src='https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <img className='object-cover w-full h-full p-3 row-span-3' src='https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <img className='object-cover w-full h-full p-3 row-span-2' src='https://images.pexels.com/photos/67818/pexels-photo-67818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </div>
        <div className='lg:w-[50%] flex flex-col justify-center'>
            <h1 className='font-bold text-4xl md:text-6xl mb-4'>Plan Your Next Trip</h1>
            <p className='text-xl font-bold md:text-xl lg:text-2xl my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, perspiciatis</p>
            <p className='text-md md:text-lg lg:text-xl my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus deleniti perferendis culpa cupiditate, nulla ullam inventore, necessitatibus minus consequuntur facilis quo quidem, nemo fugit voluptatum expedita incidunt. Nulla, sed?</p>
            <div className='flex gap-4 my-2'>
                <button className='rounded-full'>Learn More</button>
                <button className='rounded-full border-white bg-black text-white mr-4'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plans