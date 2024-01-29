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
      className="py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300 inline-block"
      style={{ width: 'auto', height: 'auto' }}
      onClick={handleClick}
    >
      Continue Shopping
    </button>
  )
}

export default ReturnToMenuButton