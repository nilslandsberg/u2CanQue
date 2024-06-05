import React, { useState, useEffect } from 'react';
import { renderMenuItems } from '../utils/renderMenuItems';
import { easterDateCheck, months } from '../utils/dateCheck';
import { filterHolidaysByType } from '../utils/filterHolidayTypes';

const EasterSpecials = () => {
  const [easterItems, setEasterItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHolidayItems = async () => {
      try {
        const response = await fetch('https://u2canque-server.onrender.com/api/holiday-items');
        const data = await response.json();
        const easterItems = filterHolidaysByType(data, 'Easter');
        setEasterItems(easterItems);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Easter items:', error);
      }
    };

    fetchHolidayItems();
  }, []);

  const easterSale = easterDateCheck();
  const isItEaster = easterSale.isItEaster;
  let easterMonth;
  let easterSaleOver;

  if (isItEaster) {
    const easterSaleEnd = easterSale.easterSaleEnd;
    easterMonth = months[easterSaleEnd.getMonth()];
    easterSaleOver = easterSaleEnd.getDate();
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
      ) : isItEaster ? (
        <>
          <div className="z-30 p-5 text-2xl bg-black text-white text-center">
            Easter Specials Available Through {easterMonth} {easterSaleOver}
          </div>
          {renderMenuItems(easterItems)}
        </>
      ) : (
        <div className="text-2xl text-white text-center pt-10">
          <p>It is not quite time for our Easter Sale</p>
          <p>Please check back closer to the holiday!</p>
        </div>
      )}
    </>
  );
};

export default EasterSpecials;