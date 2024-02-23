import React from 'react';
import { easterItems } from '../menu-data';

import { renderMenuItems } from '../utils/renderMenuItems';

const EasterSpecials = () => {
  return (
    <>
      <div className="z-30 p-5 text-2xl bg-black text-white text-center" id="appetizers">
        Easter Specials
      </div>
      {renderMenuItems(easterItems)}
    </>
  );
};

export default EasterSpecials;
