"use client";

import React from 'react'
import HolidayLink from './HolidayLink'
import { useNavBarContext } from '../contexts/NavBarContext';

function NavBarLinks() {
  const { shoppingCart } = useNavBarContext();
  
  return (
    <>
      <div className="items-center space-x-5 justify-between md:flex hidden">
        <a className=" hover:text-gray-400" href="/#about">About Us</a>
        <a className=" hover:text-gray-400" href="/catering">Catering</a>
        <HolidayLink className="hover:text-gray-400" />
        {shoppingCart ? <a className="hover:text-gray-400" href="/order/cart">Cart</a> : <></>}
        <a className="py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300" href="/order">Order Online</a>
      </div>
    </>
  )
}

export default NavBarLinks