"use client";

import React from 'react'
import { useModal } from '../contexts/ModalContext';

const ItemOrderOptions = ({ itemOptions }) => {
  const { setModalItemOptions, modalItemOptions } = useModal()

  // handler for selecting item options
  const handleOptionChange = (key, value) => {
    setModalItemOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value
    }));
  };

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      {Object.keys(itemOptions).map((key) => (
        <div key={key}>
          <label htmlFor={key}>{capitalizeFirstLetter(key)}: </label>
          <select
            id={key}
            value={modalItemOptions && modalItemOptions[key] ? modalItemOptions[key] : ""}
            onChange={(e) => handleOptionChange(key, e.target.value)}
            className="mt-2 mb-2 bg-slate-600 text-white"
          >
            <option value="">Select {capitalizeFirstLetter(key)}</option>
            {itemOptions[key].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default ItemOrderOptions