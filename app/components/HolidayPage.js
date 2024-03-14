"use client";

import React, { useEffect } from 'react'
import EasterSpecials from './EasterSpecials'
import OrderModal from './OrderModal'
import { ToastContainer } from 'react-toastify'
import ChristmasSpecials from './ChristmasSpecials';
import ThanksgivingSpecials from './ThanksgivingSpecials';

const HolidayPage = ({ holiday }) => {
  
  useEffect(() => {
    // create shoppingCart
    const holidayShoppingCart = {
      holiday: holiday,
      pickUpDate: "",
      pickUpTime: "",
      items: [],
    }

    // check to see if shoppingCart exists in localStorage
    if (localStorage.getItem('shoppingCart')) {
      // if the shoppingCart exists, remove it from localStorage
      localStorage.removeItem('shoppingCart');
    }

    // store holidayShoppingCart in Local Storage if it doesn't exist yet
    if (!localStorage.getItem('holidayShoppingCart')) {
      localStorage.setItem('holidayShoppingCart', JSON.stringify(holidayShoppingCart))
    }
    
  })
  return (
    <>
        <div className="relative flex flex-col items-center pt-[75px] min-h-screen bg-black">
          <div className="divide-y-2 divide-double divide-white w-full">
            {(holiday === "Easter") ? <EasterSpecials /> : <></>}
            {(holiday === "Christmas") ? <ChristmasSpecials /> : <></>}
            {(holiday === "Thanksgiving") ? <ThanksgivingSpecials /> : <></>}
          </div>
        </div>
        <OrderModal />
        <ToastContainer autoClose={2000} theme="dark" />
    </>
  )
}

export default HolidayPage