import React from 'react';
import { thanksgivingItems } from '../menu-data';

import { renderMenuItems } from '../utils/renderMenuItems';
import { thanksgivingDateCheck } from '../utils/dateCheck';

const ThanksgivingSpecials = () => {
  // Check to see if the Thanksgiving Sale is happening
  const thanksgivingSale = thanksgivingDateCheck();
  const isItThanksgivingSale = thanksgivingSale.isItThanksgiving;
  let thanksgivingSaleOver;

  if (isItThanksgivingSale) {
    const thanksgivingSaleEnd = thanksgivingSale.thanksgivingSaleEnd;
    thanksgivingSaleOver = thanksgivingSaleEnd.getDate();
  }

  return (
    <>
      
      {isItThanksgivingSale ? <><div className="z-30 pt-10 text-2xl bg-black text-white text-center">
        Thanksgiving Specials Available Through November {thanksgivingSaleOver}
      </div> {renderMenuItems(thanksgivingItems)} </> : <>
        <div className="text-2xl text-white text-center">
          <p>It is not quite time for our Thanksgiving Sale</p>
          <p>Please check back closer to the holiday!</p>
        </div></>}
    </>
  );
};

export default ThanksgivingSpecials;
