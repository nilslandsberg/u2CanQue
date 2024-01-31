"use client";

import React from 'react'
import HolidayLink from './HolidayLink'
import OrderOnlineButton from './OrderOnlineButton';

function NavBarLinks() {
  
  return (
    <>
      <div className="items-center space-x-5 justify-between md:flex hidden">
        <a className=" hover:text-gray-400" href="/#about">About Us</a>
        <a className=" hover:text-gray-400" href="/catering">Catering</a>
        <HolidayLink className="hover:text-gray-400" />
        <a className="hover:text-gray-400" href="/order/cart">View Cart</a>
        <OrderOnlineButton />
      </div>
    </>
  )
}

export default NavBarLinks