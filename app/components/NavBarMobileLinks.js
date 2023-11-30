"use client";

import React from 'react'
import { useSelector } from 'react-redux';

function NavBarMobileLinks() {
  const showMenu = useSelector((state) => state.buttonToggle.navBarLinksShown)
  
  return (
    <>
      {showMenu && (
        <div className="text-white">
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="/">Home</a>
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="about">About Us</a>
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="menus">Menus</a>
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="services">Services</a>
        </div>
      )}
    </>
  )
}

export default NavBarMobileLinks