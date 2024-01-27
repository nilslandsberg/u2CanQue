"use client";

import React from 'react';
import { useModal } from '../contexts/ModalContext';

const AddToOrderButton = ({ item }) => {
  const { openModal } = useModal();

  return (
    <button
      className="py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300"
      onClick={() => openModal(item)}
    >
      Add to Order
    </button>
  );
};

export default AddToOrderButton;
