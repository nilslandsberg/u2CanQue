"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const StartOrderButton = ({ selectedDate }) => {
  const router = useRouter();
  const [ errorMessage, setErrorMessage ] = useState()

  const handleClick = () => {

    if (selectedDate === undefined) {
      setErrorMessage("You must select a date to start your order");
      return;
    }

    const date = new Date(selectedDate);
    const dayOfWeekNumber = date.getUTCDay();
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

    // Check if day of week is a Monday - Friday and create shopping cart in local storage
    if (dayOfWeekNumber >= 1 && dayOfWeekNumber <= 5) {
      const dayOfWeek = daysOfWeek[dayOfWeekNumber];

      // Check if holidayShoppingCart is in localStorage
      if (localStorage.getItem('holidayShoppingCart')) {
        // remove holidayShoppingCart from localStorage
        localStorage.removeItem('holidayShoppingCart')
      }
      
      // create shoppingCart
      const shoppingCart = {
        date: selectedDate,
        dayOfWeek: dayOfWeek,
        items: [],
      }

      // store shoppingCart in Local Storage
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
      router.push(`order/menu/${dayOfWeek}`)
    } else {
      console.log("You cannot place an order for Saturday or Sunday. Please select a different date.")
    }
  };
  
  return (
    <>
      <button className="z-30 py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300" onClick={handleClick}>Start Order</button>
      {errorMessage && (
        <p className="text-orange-600 mt-2">{errorMessage}</p>
      )}
    </>
   
  )
}

export default StartOrderButton