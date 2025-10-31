'use client';
import { sidebarContext } from '@/app/__types__/common';
import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext<sidebarContext>({showSidebar: false, setShowSidebar: () => {}});

export default function SidebarProvider( {children} : any ) {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    // Put inside both state and state updater so we can access the state and update the state
    const value = {
        showSidebar,
        setShowSidebar,
    }

  return (
    // Pass the value object to the value so we can consume it on other components
    <SidebarContext.Provider value={value}>
        {children}
    </SidebarContext.Provider>
  )
};

export const useSidebar = () => {
    return useContext(SidebarContext);
}