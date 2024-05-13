import React, { useState, useEffect } from 'react';
import { renderBulkBbq, renderMenuItems, renderSides } from '../utils/renderMenuItems';
import { memorialDayDateCheck } from '../utils/dateCheck';

const MemorialDaySpecials = () => {
  const [memorialDayItems, setMemorialDayItems] = useState([]);
  const [memorialDaySides, setMemorialDaySides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHolidayItems = async () => {
      try {
        const response = await fetch('https://u2canque-server.onrender.com/api/holiday-items');
        const data = await response.json();
        const memorialDayItems = data.filter((item) => item.type === 'Memorial Day');
        const memorialDaySides = memorialDayItems.filter((item) => item.bulk);
        setMemorialDayItems(memorialDayItems.filter((item) => !item.bulk));
        setMemorialDaySides(memorialDaySides);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Memorial Day items:', error);
      }
    };

    fetchHolidayItems();
  }, []);

  // Check to see if the Memorial Day Sale is happening
  const memorialDaySale = memorialDayDateCheck();
  const isItMemorialDay = memorialDaySale.isItMemorialDay;
  let memorialDaySaleOver;

  if (isItMemorialDay) {
    const memorialDaySaleEnd = memorialDaySale.memorialDaySaleEnd;
    memorialDaySaleOver = memorialDaySaleEnd.getDate();
  }

  return (
    <>
      {isLoading ? (
        <div className="text-2xl text-white text-center pt-10">
          <p>Loading...</p>
        </div>
      ) : isItMemorialDay ? (
        <>
          <div className="z-30 p-5 text-2xl bg-black text-white text-center">
            Memorial Day Specials Available Through May {memorialDaySaleOver}
            <p>10% of sales will be donated to the Marietta VFW</p>
          </div>
          {renderMenuItems(memorialDayItems)}
          <div className="z-30 bg-slate-600 p-5 text-2xl text-white text-center" id="appetizers">
            Sides
          </div>
          {renderBulkBbq(memorialDaySides)}
        </>
      ) : (
        <div className="text-2xl text-white text-center pt-10">
          <p>It is not quite time for our Memorial Day Sale</p>
          <p>Please check back closer to the holiday!</p>
        </div>
      )}
    </>
  );
};

export default MemorialDaySpecials;