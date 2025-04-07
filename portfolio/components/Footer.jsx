import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='md:mx-10 mt-20'>
            <div className="flex md:text-sm flex-cols sm:grid grid-cols-[3fr_1fr_1fr] gap-24 my-10 mt-30 text-sm">
                {/* left  */}

                <div className=" mb-10 hidden md:block   ">
                    <h1 className='text-4xl text-slate-700 font-bold'>Tech and Vibe</h1>
                    <p className='w-full leading-6 mt-2 text-gray-600'> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. </p>
                </div>




                {/* center  */}

                <div className="mt-6">
                    <p className='text-xl font-medium mb-5' >COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>

                    </ul>
                </div>


                {/* right */}
                <div className="mt-6">
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>

                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>TechandVibe@gmail.com</li>

                    </ul>


                </div>

            </div>

            <div className="">
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2025 Tech and Vibe - All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
