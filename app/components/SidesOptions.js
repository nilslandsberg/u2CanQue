"use client";

import React, { useEffect, useState } from 'react';
import { useModal } from '../contexts/ModalContext';

const SidesOptions = ({ index }) => {
  const { modalItem, setModalItemSideOne, setModalItemSideTwo } = useModal();
  const [ modifiers, setModifiers ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const sides = modifiers.sides;

  const fetchModifiers = async () => {
    try {
      const response = await fetch(`https://u2canque-server.onrender.com/api/modifiers`);
      const data = await response.json();
      setModifiers(data[0]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching sides options:', error);
    }
  };

  useEffect(() => {
    fetchModifiers();
  }, []);

  // handler for selecting item options
  const handleSideOneOptionChange = (value) => {
    setModalItemSideOne(value);
  };

  const handleSideTwoOptionChange = (value) => {
    setModalItemSideTwo(value);
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
                {modifiers.sides.map((option) => (
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
                  {modifiers.sides.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
export default SidesOptions