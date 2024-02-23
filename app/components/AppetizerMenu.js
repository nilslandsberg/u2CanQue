import React from 'react';
import { appetizerData } from '../menu-data';

import { renderMenuItems } from '../utils/renderMenuItems';

const AppetizerMenu = () => {
  return (
    <>
      <div className="z-30 p-5 text-2xl bg-slate-600 text-white text-center" id="appetizers">
        Appetizers
      </div>
      {renderMenuItems(appetizerData)}
    </>
  );
};

export default AppetizerMenu;
