"use client";

import React, { useEffect } from 'react';
import { mondayLunch, tuesdayLunch, wednesdayLunch, thursdayLunch, fridayLunch } from '../menu-data';
import { renderMenuItems } from '../utils/renderMenuItems';
import { useRouter } from 'next/navigation';


const LunchOptions = (day) => {
  const router = useRouter()
  const { dayOfWeek } = day

  useEffect(() => {
    const storedDayOfWeek = typeof localStorage !== 'undefined' ?
      JSON.parse(localStorage.getItem('shoppingCart'))?.dayOfWeek : null;
    if (storedDayOfWeek !== dayOfWeek) {
      router.push(`${storedDayOfWeek}`)
    }
  }, []);
  
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
