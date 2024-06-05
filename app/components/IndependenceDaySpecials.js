import React, { useState, useEffect } from 'react';
import { renderBulkBbq, renderMenuItems, renderSides } from '../utils/renderMenuItems';
import { independenceDayDateCheck } from '../utils/dateCheck';
import { filterHolidaysByType } from '../utils/filterHolidayTypes';

const IndependenceDaySpecials = () => {
  const [independenceDayItems, setIndependenceDayItems] = useState([]);
  const [independenceDaySides, setIndependenceDaySides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHolidayItems = async () => {
      try {
        const response = await fetch('https://u2canque-server.onrender.com/api/holiday-items');
        const data = await response.json();
        const independenceDayItems = filterHolidaysByType(data, 'Independence Day');
        const independenceDaySides = independenceDayItems.filter((item) => item.side);
        setIndependenceDayItems(independenceDayItems.filter((item) => !item.side));
        setIndependenceDaySides(independenceDaySides);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Independence Day items:', error);
      }
    };

    fetchHolidayItems();
  }, []);

  // Check to see if the Independence Day Sale is happening
  const independenceDaySale = independenceDayDateCheck();

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
      ) : independenceDaySale ? (
        <>
          <div className="z-30 p-5 text-2xl bg-black text-white text-center">
            Independence Day Specials Available Through June 29
            <p>10% of sales will be donated to the Marietta VFW</p>
          </div>
          {renderMenuItems(independenceDayItems)}
          <div className="z-30 bg-slate-600 p-5 text-2xl text-white text-center" id="appetizers">
            Sides
          </div>
          {renderBulkBbq(independenceDaySides)}
        </>
      ) : (
        <div className="text-2xl text-white text-center pt-10">
          <p>It is not quite time for our Independence Day Sale</p>
          <p>Please check back closer to the holiday!</p>
        </div>
      )}
    </>
  );
};

export default IndependenceDaySpecials;