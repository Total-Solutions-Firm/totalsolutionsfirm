'use client';
import React from 'react'

// Home page of Total Solutions Firm
export default function HomePage() {

  return (
    <div className='h-screen p-2'>

        {/* The div for the height */}
        <div className='h-[65%] grid grid-cols-9'>

            {/* The divs for left and right */}
            <div className='w-full h-full flex flex-col items-center justify-center col-span-3'>

                {/* Quote text */}
                <div className='w-[90%] flex flex-col items-center'>
                    <h1 className='text-3xl font-mono w-full'>
                        ​Total Solutions Firm
                    </h1>
                    <h1 className='text-sm font-mono w-full mt-1'>
                        Is a locally owned and operated company, with a nationwide presence, that specializes in retail, commercial and industrial facilities. We are a leader in Denver for lighting solutions. We are able to service projects of all sizes from the initial surveys, ongoing project management, unto final installation of custom control units or specialized interfaces. We are ready to service your lighting installation, retrofits, and custom installations. 
                    </h1>
                </div>
            </div>
            <div className='w-full h-full flex items-center col-span-6'>

                {/* Image div */}
                <div className='w-[75%]'>
                    <img src="TSF_Logo.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}