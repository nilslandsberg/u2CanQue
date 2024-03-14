import React from 'react';
import { easterItems } from '../menu-data';

import { renderMenuItems } from '../utils/renderMenuItems';
import { easterDateCheck, months } from '../utils/dateCheck';

const EasterSpecials = () => {
  const easterSale = easterDateCheck();
  const isItEaster = easterSale.isItEaster
  let easterMonth;
  let easterSaleOver;

  if (isItEaster) {
    const easterSaleEnd = easterSale.easterSaleEnd;
    easterMonth = months[easterSaleEnd.getMonth()];
    easterSaleOver = easterSaleEnd.getDate();
  }
 
  return (
    <>
      <div className="z-30 p-5 text-2xl bg-black text-white text-center">
        Easter Specials Available Through {easterMonth} {easterSaleOver}
      </div>
      {isItEaster ? renderMenuItems(easterItems) : <>
        <div className="text-2xl text-white text-center">
          <p>It is not quite time for our Easter Sale</p>
          <p>Please check back closer to the holiday!</p>
        </div></>}
    </>
  );
};

export default EasterSpecials;
