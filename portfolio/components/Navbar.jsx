import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const sideMenu = useRef()

    const openMenu = ()=>{
        sideMenu.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenu.current.style.transform = 'translateX(16rem)'
    }

    const [isScroll , setIsScroll] = useState(false)

    useEffect(()=>{
      window.addEventListener('scroll' , ()=>{
        if(scrollY > 50){
          setIsScroll(true)
        }
        else{
          setIsScroll(false)
        }
      })
    },[])

    return (
        <>
       
            <nav className={` w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 py-4 ${isScroll ?"bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : "" } `}>

                <a href='#top' className='cursor-pointer ml-4 w-10 text-slate-700 mr-5 text-2xl'>
                    <h1 className='ml-4'>TechVibe</h1>
                </a>

                <ul className={`hidden md:flex items-center     gap-8 lg:gap-8 rounded-full  px-10 py-3  ${isScroll ? "": "bg-whitebg-opacity-50 backdrop-blur-lg shadow-sm" } `}>
                    <li><a href='#top'  > Home </a></li>
                    <li><a href='#about' > About </a></li>
                    <li><a href='#services' > Services </a></li>
                    <li><a href='#work' > Our Team </a></li>
                    {/* <li><a href='#contact' > Contact us </a></li> */}

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
