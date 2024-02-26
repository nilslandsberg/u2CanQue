"use client";

import React, { useState } from 'react'
import { capitalizeFirstLetter } from '../utils/stringManipulation';
import { useRouter } from 'next/navigation';


const HolidayPickUpDay = ({ holiday }) => {
  const [selectedPickUpDay, setSelectedPickUpDay] = useState();

  console.log(holiday)
  // handler for selecting item options
  const handleOptionChange = (key, value) => {
    if (value === "") {
      setSelectedPickUpDay((prevOptions) => {
        const updatedOptions = { ...prevOptions };
        delete updatedOptions[key];
        return updatedOptions;
      });
    } else {
      setSelectedPickUpDay((prevOptions) => ({
        ...prevOptions,
        [key]: value
      }));
    }
  };

  const pickUpOptions = [`Day Before ${holiday}`, `${holiday}`, `Day After ${holiday}`];
  return (
        <div className="holiday-pickup-date-selector text-white">
          <label>Day to Pickup Order: </label>
          <select
            value={selectedPickUpDay ? selectedPickUpDay : ""}
            onChange={(e) => handleOptionChange(key, e.target.value)}
            className="mt-2 mb-2 bg-slate-600 text-white"
          >
            <option value="">Select day to pick up order</option>
            {pickUpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
  );
}

export default HolidayPickUpDay