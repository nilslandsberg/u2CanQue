import React, { useState, useEffect } from 'react';
import { renderMenuItems } from '../utils/renderMenuItems';
import { thanksgivingDateCheck } from '../utils/dateCheck';

const ThanksgivingSpecials = () => {
  const [thanksgivingItems, setThanksgivingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHolidayItems = async () => {
      try {
        const response = await fetch('https://u2canque-server.onrender.com/api/holiday-items');
        const data = await response.json();
        const thanksgivingItems = data.filter((item) => item.type === 'Thanksgiving');
        setThanksgivingItems(thanksgivingItems);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Thanksgiving items:', error);
      }
    };

    fetchHolidayItems();
  }, []);

  const thanksgivingSale = thanksgivingDateCheck();
  const isItThanksgivingSale = thanksgivingSale.isItThanksgiving;
  let thanksgivingSaleOver;

  if (isItThanksgivingSale) {
    const thanksgivingSaleEnd = thanksgivingSale.thanksgivingSaleEnd;
    thanksgivingSaleOver = thanksgivingSaleEnd.getDate();
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
      ) : isItThanksgivingSale ? (
        <>
          <div className="z-30 pt-10 text-2xl bg-black text-white text-center">
            Thanksgiving Specials Available Through November {thanksgivingSaleOver}
          </div>
          {renderMenuItems(thanksgivingItems)}
        </>
      ) : (
        <div className="text-2xl text-white text-center">
          <p>It is not quite time for our Thanksgiving Sale</p>
          <p>Please check back closer to the holiday!</p>
        </div>
      )}
    </>
  );
};

export default ThanksgivingSpecials;