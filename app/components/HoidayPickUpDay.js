import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/stringManipulation';
import { useRouter } from 'next/navigation';
import { isItRibsTime } from '../utils/dateCheck';

const HolidayPickUpDay = ({ holiday, selectedPickUpDate, setSelectedPickUpDate }) => {
  // handler for selecting item options
  const handleOptionChange = (value) => {
    setSelectedPickUpDate(value);
  };

  const pickUpOptions = [`the day before ${holiday}`, `${holiday}`, `the day after ${holiday}`];
  
  const ribsSale = isItRibsTime();
  let ribsFlashSalePickUpOptions = [];
  const currentDate = new Date('2024-09-05T00:00:00');
  currentDate.setHours(17, 31, 0);
  const fridaySaleEnd = new Date('2024-09-05T00:00:00');
  fridaySaleEnd.setHours(17, 30, 0);

  if (currentDate < fridaySaleEnd) {
    ribsFlashSalePickUpOptions = ['Friday, September 6th', 'Saturday, September 7th'];
  } else { 
    ribsFlashSalePickUpOptions = ['Saturday, September 7th'];
  }

  return (
    <div className="holiday-pickup-date-selector text-white">
      <label>Day to Pickup Order: </label>
      <select
        value={selectedPickUpDate ? selectedPickUpDate : ""}
        onChange={(e) => handleOptionChange(e.target.value)}
        className="mt-2 mb-2 bg-slate-600 text-white"
      >
        <option value="">Select day to pick up order</option>
        {!ribsSale
          ? pickUpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          : ribsFlashSalePickUpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
      </select>
    </div>
  );
};

export default HolidayPickUpDay;