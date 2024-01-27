"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

const ReturnToMenuButton = ({ dayOfWeek }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/order/menu/${dayOfWeek}`)
  }

  return (
    <button
      className="py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300"
      onClick={handleClick}
    >
      Return To Menu
    </button>
  )
}

export default ReturnToMenuButton