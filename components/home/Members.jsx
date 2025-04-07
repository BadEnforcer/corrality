// import { serviceData, workData } from '@/ assets/assets'
import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Members = () => {
    return (
        <div id='work' className='flex mt-10 h-screen  flex-col items-center gap-4  text-gray-800' >
            {/* <h1 className='text-3xl text-slate-700 font-medium'>
                Meet our Team
            </h1> */}

            <p className='w-1/3 text-amber-500 text-center text-sm'>
                Simply browse through our extensive list of trusted developer's
            </p>

            <div className="flex gap-4 sm:justify-center h-52  w-full overflow-scroll ">

                {serviceData.map(({ icon, title, description }, index) => (

                    <div className='flex flex-col items-center border border-gray-400 cursor-pointer text-xs rounded flex-shrink-0 ' key={index} >
                        <Image className='w-2/5 sm:w-20 mb-2 rounded-full' src={icon} alt='' />
                        {/* <p>{title}</p> */}
                        <p> {description} </p>

                    </div>

                ))}



            </div>

            <div className="flex gap-4 sm:justify-center h-52  w-full overflow-scroll ">

                {serviceData.map(({ icon, title, description }, index) => (

                    <div className='flex flex-col border border-gray-400 items-center cursor-pointer text-xs  rounded flex-shrink-0 ' key={index} >
                        <Image className='w-1/2 sm:w-20 mb-2 rounded-full' src={icon} alt='' />
                        {/* <p>{title}</p> */}
                        <p> {description} </p>

                    </div>

                ))}



            </div>

        </div>
    )
}

export default Members
