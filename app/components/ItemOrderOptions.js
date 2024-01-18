"use client";

import React from 'react'
import { useModal } from '../contexts/ModalContext';

const ItemOrderOptions = ({ itemOptions }) => {
  const { setModalItemOptions, modalItemOptions } = useModal()

  // handler for selecting item options
  const handleOptionChange = (key, value) => {
    console.log("Handling object change: ", key, value)
    setModalItemOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value
    }));
  };

  return (
    <div>
      {Object.keys(itemOptions).map((key) => (
        <div key={key}>
          <label htmlFor={key}>{key}: </label>
          <select
            id={key}
            value={modalItemOptions && modalItemOptions[key] ? modalItemOptions[key] : ""}
            onChange={(e) => handleOptionChange(key, e.target.value)}
            className="mt-2 text-black"
          >
            <option value="">Select {key}</option>
            {itemOptions[key].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      {/* <div>
        {modalItemOptions && Object.keys(modalItemOptions).map((key) => (
          <p key={key}>Selected {key}: {modalItemOptions[key]}</p>
        ))}
      </div> */}
    </div>
  );
}

export default ItemOrderOptions