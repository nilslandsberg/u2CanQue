"use client";

import React from 'react'
import { useModal } from '../contexts/ModalContext';

const ItemQuantity = () => {
  const { modalItemQuantity, setModalItemQuantity } = useModal();

  const handleDecrement = () => {
    if(modalItemQuantity > 1) {
      setModalItemQuantity(prevCount => prevCount - 1)
    }
  }

  const handleIncrement = () => {
    setModalItemQuantity(prevCount => prevCount + 1)
  }
  return (
    <>
    <div className="flex flex-row items-center justify-end p-4">
      <div className="text-white pr-2">Quantity: </div>
      <div className="inline-flex items-center rounded overflow-hidden border">
        <button type="button" onClick={handleDecrement} className="px-2 py-1 h-full  border-gray-400 bg-slate-600 cursor-pointer">-</button>
        <div className="flex items-center justify-center bg-white text-black px-2 py-1 h-full">{modalItemQuantity}</div>
        <button type='button' onClick={handleIncrement} className="px-2 py-1 h-full  border-gray-400 bg-slate-600 cursor-pointer">+</button>
      </div>
    </div>

    </>
  )
}

export default ItemQuantity