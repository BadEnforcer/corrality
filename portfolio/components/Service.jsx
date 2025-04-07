import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React, { useContext } from 'react'


const Service = () => {

  


    return (


        <div id='services'  className='flex h-screen flex-col items-center mb-10 gap-4 my-16 md:mx-10 text-gray-800' >
        <h1 className='text-3xl text-slate-700 font-medium'>
            What we offer
        </h1>
    
        <p className='sm:w-1/3 text-center text-sm'>
            Simply browse through our extensive list of trusted Services
        </p>
    
        <div className="md:grid gap-4 md:grid-cols-4   sm:justify-center gap-y-6 px-3   pt-5 w-full overflow-scroll ">
    
        {serviceData.map(({ icon, title, description, link }, index)  => (
    
                <div key={index }  className="gap-2    border   hover:bg-gray-400 border-black rounded  overflow-hidden cursor-pointer hover:-translate-y-1 duration-300 transition-all  items-center pt-4 ">
                   
                    <Image className='md:w-24  rounded-full' src={icon} alt='' />
    
                    <div className="px-20 py-4 mb-4  ">

                        <div className='text-green-600  flex items-center   gap-2 text-sm text-center'>
    
                         
                        </div>
    
                        <p className="text-lg  font-bold " > {title} </p>
                        <p className="text-sm  hover:text-gray-500 " >{description}</p>


    
                    </div>
                </div>
    
            ))}
    
    
    
        </div>
    
    
    </div>
    )
    }
       
                      
    

export default Service



