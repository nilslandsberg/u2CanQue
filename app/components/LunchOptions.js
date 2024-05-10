import React, { useState, useEffect } from 'react';
import { renderMenuItems } from '../utils/renderMenuItems';

const LunchOptions = ({ dayOfWeek }) => {
  const [lunchOptions, setLunchOptions] = useState([]);

  const fetchLunchOptions = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/lunch/${dayOfWeek}`);
      const data = await response.json();
      const sortedData = sortLunchData(data);
      setLunchOptions(sortedData);
    } catch (error) {
      console.error('Error fetching lunch options:', error);
    }
  };

  useEffect(() => {
    fetchLunchOptions();
  }, [dayOfWeek]);

  // Function to sort the lunch data
  const sortLunchData = (lunchData) => {
    // Define the desired order for specific items
    const desiredOrder = ['BBQ Chicken Meal', 'Texas Bold (and beanless) Chili'];

    // Sort the data based on the desired order
    return lunchData.sort((a, b) => {
      const aIndex = desiredOrder.indexOf(a.name);
      const bIndex = desiredOrder.indexOf(b.name);

      // If the item is in the desiredOrder array, sort it based on its index
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }

      // If the item is not in the desiredOrder array, sort it alphabetically by name
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  };

  return (
    <>
      <div className="z-30 p-5 text-2xl text-white bg-slate-600 text-center" id="lunch-options">
        Lunch Options
      </div>
      {renderMenuItems(lunchOptions)}
    </>
  );
};

export default LunchOptions;