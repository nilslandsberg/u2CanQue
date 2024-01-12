"use client";

import React from 'react'
import { useSelector } from 'react-redux';
import HolidayLink from './HolidayLink';

function NavBarMobileLinks() {
  const showMenu = useSelector((state) => state.buttonToggle.navBarLinksShown)

  return (
    <>
      {showMenu && (
        <div className="text-white">
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="/#about">About Us</a>
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="/services">Services</a>
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="/catering">Catering</a>
          <HolidayLink className="block py-2 px-4 text-sm hover:bg-slate-700"/>
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="/order">Order Online</a>
        </div>
      )}
    </>
  )
}

export default NavBarMobileLinks