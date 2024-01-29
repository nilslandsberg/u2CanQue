import React from 'react'

const CheckOutButton = () => {
  const handleAddToCart = () => {
    console.log('Click!')
  }
  return (
    <button
        className="z-30 py-2 px-3 bg-green-600 rounded text-gray-900 hover:bg-green-400 hover:text-white transition duration-300 mb-4"
        onClick={handleAddToCart}
      >
        Checkout
      </button>
  )
}

export default CheckOutButton