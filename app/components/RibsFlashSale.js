import React, { useState, useEffect } from 'react';
import { renderMenuItems } from '../utils/renderMenuItems';
import { easterDateCheck, isItRibsTime, months } from '../utils/dateCheck';
import { filterHolidaysByType } from '../utils/filterHolidayTypes';

const RibsFlashSale = () => {
  const [ribsFlashSaleItems, setRibsFlashSaleItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHolidayItems = async () => {
      try {
        const response = await fetch('https://u2canque-server.onrender.com/api/holiday-items');
        const data = await response.json();
        const ribsFlashSaleItems = filterHolidaysByType(data, 'Ribs Flash Sale');
        setRibsFlashSaleItems(ribsFlashSaleItems);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Ribs Flash Sale items:', error);
      }
    };

    fetchHolidayItems();
  }, []);

  const ribsFlashSale = isItRibsTime();

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
      ) : ribsFlashSale ? (
        <>
          <div className="z-30 p-5 text-2xl bg-black text-white text-center">
            Super Bowl Ribs Flash Sale! Order Now for Pickup on Super Bowl Sunday! Sale Ends on February 8th!
          </div>
          {renderMenuItems(ribsFlashSaleItems)}
        </>
      ) : (
        <div className="text-2xl text-white text-center pt-10">
          <p>There is no Ribs Flash Sale at this time.</p>
          <p>Please check back in the near future!</p>
        </div>
      )}
    </>
  );
};

export default RibsFlashSale;