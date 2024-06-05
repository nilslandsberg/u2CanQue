import React, { useState, useEffect } from 'react';
import { renderMenuItems } from '../utils/renderMenuItems';
import { christmasDateCheck } from '../utils/dateCheck';
import { filterHolidaysByType } from '../utils/filterHolidayTypes';

const ChristmasSpecials = () => {
  const [christmasItems, setChristmasItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHolidayItems = async () => {
      try {
        const response = await fetch('https://u2canque-server.onrender.com/api/holiday-items');
        const data = await response.json();
        const christmasItems = filterHolidaysByType(data, 'Christmas');
        setChristmasItems(christmasItems);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Christmas items:', error);
      }
    };

    fetchHolidayItems();
  }, []);

  // Check to see if the Christmas Sale is happening
  const christmasSale = christmasDateCheck();

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
      ) : christmasSale ? (
        <>
          <div className="z-30 p-5 text-2xl bg-black text-white text-center">
            Christmas Specials Available Through December 20
          </div>
          {renderMenuItems(christmasItems)}
        </>
      ) : (
        <div className="text-2xl text-white text-center pt-10">
          <p>It is not quite time for our Christmas Sale</p>
          <p>Please check back closer to the holiday!</p>
        </div>
      )}
    </>
  );
};

export default ChristmasSpecials;