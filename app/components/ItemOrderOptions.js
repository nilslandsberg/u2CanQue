"use client";

import React from 'react';
import { useModal } from '../contexts/ModalContext';
import { capitalizeFirstLetter } from '../utils/stringManipulation';

const ItemOrderOptions = () => {
  const { setModalItemOptions, modalItemOptions, modalItem } = useModal();

  // handler for selecting item options
  const handleOptionChange = (key, value) => {
    if (value === "") {
      setModalItemOptions((prevOptions) => {
        const updatedOptions = { ...prevOptions };
        delete updatedOptions[key];
        return updatedOptions;
      });
    } else {
      setModalItemOptions((prevOptions) => ({
        ...prevOptions,
        [key]: value
      }));
    }
  };

  const itemOptions = modalItem.options;

  return (
    <div>
      {Object.keys(itemOptions).map((key) => (
        itemOptions[key].length > 0 && (
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
        )
      ))}
    </div>
  );
}

export default ItemOrderOptions;
