"use client";

import React from 'react'
import HolidayLink from './HolidayLink';
import { useNavBarContext } from '../contexts/NavBarContext';

function NavBarMobileLinks() {
  const { isToggled } = useNavBarContext();

  return (
    <>
      {isToggled && (
        <div className="text-white">
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="/#about">About Us</a>
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="/catering">Catering</a>
          <HolidayLink className="block py-2 px-4 text-sm hover:bg-slate-700"/>
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="/order/cart">View Cart</a>
          <a className="block py-2 px-4 text-sm hover:bg-slate-700" href="/order">Order Online</a>
        </div>
      )}
    </>
  )
}

export default NavBarMobileLinks