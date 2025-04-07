import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full  max-w-3xl text-center mx-auto flex h-screen flex-col items-center justify-center gap-4'>


            <div className="">

            

                <h1 className='text-xl mb-3 font-bold flex items-end gap-2 text-slate-700 md:text-2xl'>Tech and Vibe</h1>

                <h3 className='text-2xl sm:text-4xl items-end flex  lg:text-[60px] '>Company Based in INDIA</h3>

                <p className='max-w-2xl mx-auto '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elintium,  repellat asperiores nisi dicta impedit nesciunt, molestias possimus ducimus culpa illo velit quia veniam. Recusandae doloremque saepe quo iure et ab eligendi.
                </p>

                <div className="flex flex-col mx-auto   sm:flex-row items-end gap-4 mt-4">
                    <a href='#contact' className='justify-center w-30 border border-white rounded-full bg-slate-800 text-white flex items-center gap-2' > Contact me <Image className='w-4' alt='' src={assets.right_arrow_white} /> </a>

                </div>


            </div>




        </div>
    )
}

export default Header
