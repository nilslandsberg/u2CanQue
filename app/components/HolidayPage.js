"use client";

import React, { useEffect } from 'react'
import EasterSpecials from './EasterSpecials'
import OrderModal from './OrderModal'
import { ToastContainer } from 'react-toastify'

const HolidayPage = ({ holiday }) => {
  useEffect(() => {
    // create shoppingCart
    const holidayShoppingCart = {
      holiday: holiday,
      pickUpDate: "",
      pickUpTime: "",
      items: [],
    }

    // store shoppingCart in Local Storage if it doesn't exist yet
    if (!localStorage.getItem('holidayShoppingCart')) {
      localStorage.setItem('holidayShoppingCart', JSON.stringify(holidayShoppingCart))
    }
    
  })
  return (
    <>
        <div className="relative flex flex-col items-center pt-[75px] min-h-screen bg-black">
          <div className="divide-y-2 divide-double divide-white w-full">
            {(holiday === "Easter") ? <EasterSpecials /> : <></>}
          </div>
        </div>
        <OrderModal />
        <ToastContainer autoClose={2000} theme="dark" />
    </>
  )
}

export default HolidayPage