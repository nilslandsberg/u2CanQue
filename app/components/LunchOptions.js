"use client";

import React, { useEffect } from 'react';
import { mondayLunch, tuesdayLunch, wednesdayLunch, thursdayLunch, fridayLunch } from '../menu-data';
import { useDispatch, useSelector } from 'react-redux';
import { renderMenuItems } from '../utils/renderMenuItems';


const LunchOptions = (day) => {
  const { dayOfWeek } = day
  const storedDayOfWeek = localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')).dayOfWeek : null;

  const dayToLunchOptions = {
    monday: mondayLunch,
    tuesday: tuesdayLunch,
    wednesday: wednesdayLunch,
    thursday: thursdayLunch,
    friday: fridayLunch
  }

  const lunchOptions = dayToLunchOptions[dayOfWeek] || []
  
  return (
    <>
      <div className="z-30 p-5 text-2xl text-white  bg-slate-600 text-center" id="lunch-options">
        Lunch Options
      </div>
      {renderMenuItems(lunchOptions)}
    </>
  );
};

export default LunchOptions;
