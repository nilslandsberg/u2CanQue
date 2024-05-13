"use client";
import React, { useEffect, useState } from 'react';
import { useModal } from '../contexts/ModalContext';

const BreadOptions = ({ index }) => {
  const { modalItem, setModalItemBread } = useModal();
  const [modifiers, setModifiers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchModifiers = async () => {
    try {
      const response = await fetch(`https://u2canque-server.onrender.com/api/modifiers`);
      const data = await response.json();
      setModifiers(data[0]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching bread options:', error);
    }
  };

  useEffect(() => {
    fetchModifiers();
  }, []);

  // handler for selecting item options
  const handleOptionChange = (value) => {
    setModalItemBread(value);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row items-center">
          <label className="mr-2">Bread: </label>
          <div>
            <select
              id={modifiers.bread[index]}
              value={modifiers.bread[index]}
              onChange={(e) => handleOptionChange(e.target.value)}
              className="mt-2 mb-2 bg-slate-600 text-white"
            >
              <option value="null">Select Bread</option>
              {modifiers.bread.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default BreadOptions;