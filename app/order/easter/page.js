"use client";

import EasterSpecials from '@/app/components/EasterSpecials';
import HolidayPickUpDay from '@/app/components/HoidayPickUpDay';
import OrderModal from '@/app/components/OrderModal';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const page = () => {

  useEffect(() => {
    // create shoppingCart
    const holidayShoppingCart = {
      holiday: "Easter",
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
            <EasterSpecials />
          </div>
        </div>
        <OrderModal />
        <ToastContainer autoClose={2000} theme="dark" />
    </>
  )
}

export default page