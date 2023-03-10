import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Banner = () => {
    const [menu, setMenu] = useState(false)

    const clickNav =()=> {
        setMenu(!menu)
    }

  return (
    <div>
        <div className='w-full h-screen relative text-white'>
            <nav className={menu ? 'fixed w-full left-0 top-0 duration-300 ease-in h-screen flex flex-col items-center bg-black/90 z-10 justify-center' : 'fixed -left-[100%] h-screen flex flex-col items-center bg-black/90 z-10 justify-center duration-300 ease-in'}>
                <AiOutlineClose onClick={clickNav} className='absolute text-white right-8 top-4 cursor-pointer font-bold' size={35}/>
                <ul className='font-bold text-center text-4xl lg:text-5xl '>
                    <li className='py-5 cursor-pointer hover:scale-110 duration-300'>Home</li>
                    <li className='py-5 cursor-pointer hover:scale-110 duration-300'>Destinations</li>
                    <li className='py-5 cursor-pointer hover:scale-110 duration-300'>Reservations</li>
                    <li className='py-5 cursor-pointer hover:scale-110 duration-300'>Amenities</li>
                    <li className='py-5 cursor-pointer hover:scale-110 duration-300'>Rooms</li>
                </ul>
            </nav>
            <div className='bg-black/30 w-full h-screen absolute' />
            <img className='w-full h-screen object-cover' src='https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
            <div className='absolute top-0 left-0 w-full h-screen flex items-center'>
                <div className='max-w-[800px] px-5 mx-auto'>
                    <p className='text-4xl lg:text-5xl py-2'>All Inclusive</p>
                    <h1 className='text-5xl font-bold py-2'>Private Beaches & Getaways</h1>
                    <p className='text-lg py-2'>Planning that perfect vacation we have the tool just for you! Plan all travel related logistics, We will make you never want to plan a vacation without anymore!</p>
                    <button className='border-none text-black bg-white px-5 py-2 my-3 font-bold'>Book Now</button>
                </div>
            </div>
            <nav className='absolute top-0 left-0 flex justify-between mx-auto w-full pt-5 px-4 md:px-10'>
                <h1 className='text-3xl lg:text-4xl font-bold'>Xure Experience</h1>
                <GiHamburgerMenu onClick={clickNav} className='cursor-pointer' size={30} />
            </nav>
        </div>
    </div>
  )
}

export default Banner