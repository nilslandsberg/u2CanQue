"use client";

import React from 'react'

const handleClick = (item) => {
  console.log(item)
}

const AddToOrderButton = ({ item }) => {
  const handleClick = () => {
    console.log("Button clicked: ", item)
  }

  return (
    <button 
      className="py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300"
      onClick={handleClick}
    >
      Add to Order
    </button>
  )
}

export default AddToOrderButton