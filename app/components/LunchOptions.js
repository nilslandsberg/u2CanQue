"use client";

import React, { useEffect } from 'react';
import { mondayLunch, tuesdayLunch, wednesdayLunch, thursdayLunch, fridayLunch } from '../menu-data';
import { useDispatch, useSelector } from 'react-redux';
import { renderMenuItems } from '../utils/renderMenuItems';

const LunchOptions = () => {

  return (
    <>
      <div className="z-30 p-5 text-2xl text-white  bg-slate-600 text-center">
        Lunch Options
      </div>
      {/* {renderMenuItems(lunchOptions)} */}
    </>
  );
};

export default LunchOptions;
