'use client';
import { useSidebar } from '@/contexts/SidebarContext/SidebarContext';
import React from 'react'

export default function Navbar() {
    const {showSidebar, setShowSidebar} = useSidebar();

  return (
    <div className='sticky top-0 h-16 flex items-center bg-gray-300'>
        <div className='w-full'>
            <button onClick={() => {setShowSidebar(!showSidebar)}}>Show Sidebar</button>
        </div>
    </div>
  )
}
