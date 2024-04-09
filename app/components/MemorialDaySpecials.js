import React from 'react';
import { memorialDayItems } from '../menu-data';

import { renderMenuItems } from '../utils/renderMenuItems';
import { memorialDayDateCheck } from '../utils/dateCheck';

const MemorialDaySpecials = () => {
  // Check to see if the MemorialDay Sale is happening
  const memorialDaySale = memorialDayDateCheck();
  const isItMemorialDay = memorialDaySale.isItMemorialDay
  let memorialDaySaleOver
 
  if (isItMemorialDay) {
    const memorialDaySaleEnd = memorialDaySale.memorialDaySaleEnd;
    memorialDaySaleOver = memorialDaySaleEnd.getDate();
  }
  return (
    <>
      {isItMemorialDay ?
        <>
          <div className="z-30 p-5 text-2xl bg-black text-white text-center">
            Memorial Day Specials Available Through May {memorialDaySaleOver}
          </div>
          {renderMenuItems(memorialDayItems)}
        </> :
        <>
          <div className="text-2xl text-white text-center pt-10">
            <p>It is not quite time for our Memorial Day Sale</p>
            <p>Please check back closer to the holiday!</p>
          </div>
        </>
      }
    </>
  );
};

export default MemorialDaySpecials;
