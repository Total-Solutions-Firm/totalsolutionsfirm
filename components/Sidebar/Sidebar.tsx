'use client';
import { useSidebar } from '@/contexts/SidebarContext/SidebarContext';
import React from 'react'

export default function Sidebar() {
    const {showSidebar, setShowSidebar} = useSidebar();
  return (
    <div className={`w-[20%] h-screen fixed bg-gray-300 z-50 ${showSidebar ? 'left-0' : 'left-[-25%]'} transition-all ease-out`}>
        <div className='w-full flex justify-end items-center px-2 h-[9%]'>
            <button onClick={() => {setShowSidebar(!showSidebar)}}>Close</button>
        </div>
    </div>
  )
};