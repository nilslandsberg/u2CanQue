"use client";

import React from 'react';
import { useModal } from '../contexts/ModalContext';
import { modifiers } from '../menu-data';

const SidesOptions = ({ index }) => {
  const { modalItem, setModalItemSideOne, setModalItemSideTwo } = useModal();
  const sides = modifiers.sides;

  // handler for selecting item options
  const handleSideOneOptionChange = (value) => {
    setModalItemSideOne(value);
  };

  const handleSideTwoOptionChange = (value) => {
    setModalItemSideTwo(value);
  }
  return (
    <>
      <div className="flex flex-row items-center">
        <label className="mr-2">{modalItem.twoSides ? "Side 1:" : "Side:"}</label>
          <div>
            <select
              id={sides[index]}
              value={sides[index]}
              onChange={(e) => handleSideOneOptionChange(e.target.value)}
              className="mt-2 mb-2 bg-slate-600 text-white"
            >
              <option value="null">Select Side</option>
              {sides.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
      </div>
      {modalItem.twoSides && (
        <div className="flex flex-row items-center">
        <label className="mr-2">Side 2: </label>
          <div>
            <select
              id={sides[index]}
              value={sides[index]}
              onChange={(e) => handleSideTwoOptionChange(e.target.value)}
              className="mt-2 mb-2 bg-slate-600 text-white"
            >
              <option value="">Select Side</option>
              {sides.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
      </div>
      )}
    </>
    
  )
}

export default SidesOptions