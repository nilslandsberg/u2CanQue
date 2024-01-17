"use client";

import React from 'react';
import { useModal } from '../contexts/ModalContext';
import Image from 'next/image';
import ItemOrderOptions from './ItemOrderOptions';

const OrderModal = () => {
  const { modalItem, closeModal } = useModal();

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black bg-opacity-10"></div>
        <div className="bg-black border p-4 shadow-lg flex flex-col items-center">
          <p className="text-white text-2xl mt-4">{modalItem.name}</p>
          {modalItem.options && (<ItemOrderOptions itemOptions={modalItem.options}/>)}
          <div className="flex flex-row mt-4">
            <button
              onClick={() => closeModal()}
              className="z-30 py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300 mr-2"
            >
              Return to Menu
            </button>
            <button 
              className="z-30 py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300"
              onClick={() => closeModal()}
            >
              Add To Cart
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
