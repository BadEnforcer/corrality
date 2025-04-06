import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {

    const sideMenu = useRef()

    const openMenu = ()=>{
        sideMenu.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenu.current.style.transform = 'translateX(16rem)'
    }

    return (
        <>
       
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 py-4'>

                <a href='#top' className='cursor-pointer ml-4 w-10 text-red-600 mr-5 text-2xl'>
                    <h1 className='ml-4'>Tech Vibe</h1>
                </a>

                <ul className='hidden md:flex items-center bg-white shadow-sm  bg-opacity-50 gap-6 lg:gap-8 rounded-full p-2 px-12 py-3'>
                    <li><a href='#top'  > Home </a></li>
                    <li><a href='#about' > About </a></li>
                    <li><a href='services' > Services </a></li>
                    <li><a href='#work' > Our Work </a></li>
                    <li><a href='#contact' > Contact us </a></li>

                </ul>

                <div className="flex items-center gap-6">
                    <a href="" className='hidden lg:flex items-center gap-2 w-24 justify-center  px-5 py-2 border border-gray-500 rounded-full ml-3'> Contact <Image alt='' src={assets.arrow_icon} className='w-3' /> </a>

                    <button onClick={openMenu} className='block md:hidden p-4 mr-3'>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* mobile */}

                <ul ref={sideMenu} className='flex md:hidden flex-col items-center  gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div onClick={closeMenu} className="absolute right-6 top-6">
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a href='#top'  onClick={closeMenu} > Home </a></li>
                    <li><a href='#about'  onClick={closeMenu}> About </a></li>
                    <li><a href='services' onClick={closeMenu} > Services </a></li>
                    <li><a href='#work' onClick={closeMenu} > Our Work </a></li>
                    <li><a href='#contact' onClick={closeMenu} > Contact us </a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
