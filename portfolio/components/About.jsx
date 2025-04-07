import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full h-screen px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg '>Introduction</h4>

            <h2 className='text-center  text-5xl text-slate-700'>About Us</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">

                <div className="w-64 sm:w-80  rounded-3xl max-w-none">
                    <Image alt='user' className='w-full ml-4 rounded-3xl' src={assets.user_image} />
                </div>

                <div className="flex-1 p-4 ">

                    <p className='mb-10 max-w-2xl p-4 ' >At Tech and Vibe, we're revolutionizing healthcare by making it more accessible, efficient, and connected. Our mission is to bridge the gap between individuals and top-tier medical professionals nationwide through our innovative medical networking platform.
                        We specialize in developing cutting-edge smart QR technology that allows instant retrieval of critical medical information with just a scan, even without an internet connection. Our products, embedded with these advanced smart QR codes, empower users to have their medical history and vital information at their fingertips, ensuring they receive the best care wherever they are.
                        By streamlining access to healthcare services, we are committed to improving the overall healthcare experience and ensuring that every individual has the tools they need for better health management.
                    </p>

                   

                </div>

            </div>
        </div>
    )
}

export default About
