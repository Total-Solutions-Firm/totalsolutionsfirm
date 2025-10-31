'use client';
import { useSidebar } from '@/contexts/SidebarContext/SidebarContext';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

// Links for different pages
const sidebarLinks: any[] = [
  {
    name: 'Home',
    destination: '/home',
  },
  {
    name: 'About Us',
    destination: '/about-us',
  },
  {
    name: 'Services',
    destination: '/services',
  },
  {
    name: 'Projects',
    destination: '/projects',
  },
  {
    name: 'Learning Center',
    destination: '/learning-center',
  },
  {
    name: 'Support & Service',
    destination: '/support-service',
  },
  {
    name: 'Contact',
    destination: '/contact',
  },
  {
    name: 'Careers',
    destination: '/careers',
  },
]

export default function Sidebar() {
    const {showSidebar, setShowSidebar} = useSidebar();
    const router = useRouter();
    const pathname = usePathname();

    const navigateTo = (link:string) => {
      router.push(link);
      setShowSidebar(!showSidebar);
    };

  return (
    <div className={`w-[20%] h-screen fixed bg-gray-300 z-50 ${showSidebar ? 'left-0' : 'left-[-25%]'} transition-all ease-out`}>

        {/* Close sidebar button div */}
        <div className='w-full flex justify-end items-center px-2 h-[9%]'>
            <button onClick={() => {setShowSidebar(!showSidebar)}}>Close</button>
        </div>

        {/* Navigation links */}
        <div className='w-full px-4 flex flex-col gap-2'>
          {sidebarLinks.map((data:any, index:number) => (
            <div onClick={() => {navigateTo(data.destination)}} className={`w-full flex justify-start border-b-2 hover:cursor-pointer hover:border-black ${pathname.startsWith(data.destination) ? 'border-black' : 'border-transparent'}`} key={index}>
              <h1>{data.name}</h1>
            </div>
          ))}
        </div>
    </div>
  )
};