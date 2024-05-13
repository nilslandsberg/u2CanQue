import React from 'react';
import { independenceDayItems, independenceDaySides } from '../menu-data';

import { renderBulkBbq, renderMenuItems, renderSides } from '../utils/renderMenuItems';
import { independenceDayDateCheck } from '../utils/dateCheck';

const IndependenceDaySpecials = () => {
  // Check to see if the Independence Day Sale is happening
  const independenceDaySale = independenceDayDateCheck();
  console.log(independenceDaySale)
  return (
    <>
      {independenceDaySale ?
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
        </> :
        <>
          <div className="text-2xl text-white text-center pt-10">
            <p>It is not quite time for our Independence Day Sale</p>
            <p>Please check back closer to the holiday!</p>
          </div>
        </>
      }
    </>
  );
};

export default IndependenceDaySpecials;
