import React from 'react';
import { christmasItems } from '../menu-data';

import { renderMenuItems } from '../utils/renderMenuItems';
import { christmasDateCheck } from '../utils/dateCheck';

const ChristmasSpecials = () => {
  // Check to see if the Christmas Sale is happening
  const christmasSale = christmasDateCheck();
  
  return (
    <>
      <div className="z-30 p-5 text-2xl bg-black text-white text-center">
        Christmas Specials Available Through December 20
      </div>
      {christmasSale ? renderMenuItems(christmasItems) : <>
        <div className="text-2xl text-white text-center">
          <p>It is not quite time for our Christmas Sale</p>
          <p>Please check back closer to the holiday!</p>
        </div></>}
    </>
  );
};

export default ChristmasSpecials;
