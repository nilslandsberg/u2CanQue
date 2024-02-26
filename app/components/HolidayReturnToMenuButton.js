"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

const HolidayReturnToMenuButton = ({ holiday }) => {
  const router = useRouter();
  const lowerCasedHoliday = holiday.toLowerCase();
  
  const handleClick = () => {
    router.push(`/order/${lowerCasedHoliday}`)
  }

  return (
    <button
      className="py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300 inline-block mb-4"
      style={{ width: 'auto', height: 'auto' }}
      onClick={handleClick}
    >
      Return to {holiday} Menu
    </button>
  )
}

export default HolidayReturnToMenuButton