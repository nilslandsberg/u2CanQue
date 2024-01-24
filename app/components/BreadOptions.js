"use client";

import React from 'react'
import { useModal } from '../contexts/ModalContext';
import { modifiers } from '../menu-data';

const BreadOptions = ({ index }) => {
  const { setModalItemBread } = useModal();
  const bread = modifiers.bread;

  // handler for selecting item options
  const handleOptionChange = (value) => {
    setModalItemBread(value);
  };

  return (
    <div className="flex flex-row items-center">
      <label className="mr-2">Bread: </label>
        <div>
          <select
            id={bread[index]}
            value={bread[index]}
            onChange={(e) => handleOptionChange(e.target.value)}
            className="mt-2 mb-2 bg-slate-600 text-white"
          >
            <option value="null">Select Bread</option>
            {bread.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
    </div>
  );
}

export default BreadOptions