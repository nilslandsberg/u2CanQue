import React from 'react';
import { memorialDayItems, memorialDaySides } from '../menu-data';

import { renderBulkBbq, renderMenuItems, renderSides } from '../utils/renderMenuItems';
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
            <p>10% of sales will be donated to the Marietta VFW</p>
          </div>
          {renderMenuItems(memorialDayItems)}
          <div className="z-30 bg-slate-600 p-5 text-2xl text-white text-center" id="appetizers">
            Sides
          </div>
          {renderBulkBbq(memorialDaySides)}
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
