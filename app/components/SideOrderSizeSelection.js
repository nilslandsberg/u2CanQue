"use client";

import React from 'react'
import { useModal } from '../contexts/ModalContext';
import { sides } from '../menu-data';

const SideOrderSizeSelection = ({ index }) => {
  const { setModalItemSize, modalItem } = useModal();

  const handleSideSizeChange = (value) => {
    setModalItemSize(value);
  }
  
  const sizeOptions = modalItem.size

  return (
    <div className="flex flex-row items-center">
        <label className="mr-2">Size for Order:</label>
          <div>
            <select
              id={sizeOptions[index]}
              value={sizeOptions[index]}
              onChange={(e) => handleSideSizeChange(e.target.value)}
              className="mt-2 mb-2 bg-slate-600 text-white"
            >
              <option value="">Select Size</option>
              {sizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
      </div>
  )
}

export default SideOrderSizeSelection