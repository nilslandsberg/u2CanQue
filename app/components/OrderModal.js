"use client";

import React from 'react'
import { useModal } from '../contexts/ModalContext';

const OrderModal = () => {
  const { modalItem, closeModal } = useModal();
  return (
    <div className="fixed inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen">
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-40"></div>

      {/* Modal Content */}
      <div className="bg-white p-4 rounded shadow-lg z-50 relative">
        {/* Your modal content goes here */}
        <p className="text-gray-800">{modalItem.name}</p>
        <button
          onClick={() => closeModal()}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Close Modal
        </button>
      </div>
    </div>
  </div>
  )
}

export default OrderModal