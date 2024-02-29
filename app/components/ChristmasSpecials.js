import React from 'react';
import { christmasItems } from '../menu-data';

import { renderMenuItems } from '../utils/renderMenuItems';

const ChristmasSpecials = () => {
  return (
    <>
      <div className="z-30 p-5 text-2xl bg-black text-white text-center" id="appetizers">
        Christmas Specials
      </div>
      {renderMenuItems(christmasItems)}
    </>
  );
};

export default ChristmasSpecials;
