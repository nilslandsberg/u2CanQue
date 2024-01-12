import { useRouter } from 'next/navigation';
import React from 'react'

const StartOrderButton = ({ selectedDate }) => {
  const router = useRouter();

  const handleClick = () => {
    
    const date = new Date(selectedDate);
    const dayOfWeekNumber = date.getUTCDay();
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

    if (dayOfWeekNumber >= 1 && dayOfWeekNumber <= 5) {
      const dayOfWeek = daysOfWeek[dayOfWeekNumber];
      
      // create shoppingCart
      const shoppingCart = {
        date: selectedDate,
        dayOfWeek: dayOfWeek
      }

      // store shoppingCart in Local Storage
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
      router.push(`order/menu/${dayOfWeek}`)
    } else {
      console.log("You cannot place an order for Saturday or Sunday. Please select a different date.")
    }
  };
  
  return (
    <button className="z-30 py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300" onClick={handleClick}>Start Order</button>
  )
}

export default StartOrderButton