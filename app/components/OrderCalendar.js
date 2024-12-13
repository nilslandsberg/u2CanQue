'use client';

import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import StartOrderButton from "./StartOrderButton";
import { DateTime } from "luxon";

const OrderCalendar = () => {
  const [selected, setSelected] = useState();

  const isDisabled = (date) => {
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const currentDateTime = DateTime.now().setZone('America/New_York');
    const tomorrow = currentDateTime.plus({ days: 1 });

    // Convert date to Luxon DateTime object
    const luxonDate = DateTime.fromJSDate(date);
   
    
  
    // Disable weekends
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return true;
    }
  
    // Disable Thanksgiving (fourth Thursday of November)
    if (month === 10 && dayOfWeek === 4 && dayOfMonth > 22 && dayOfMonth < 30) {
      return true;
    }
  
    // Disable Christmas
    if (month === 11 && dayOfMonth === 25) {
      return true;
    }
  
    // Disable past dates
    if (luxonDate <= currentDateTime) {
      return true;
    }
  
    // Disable tomorrow's date if it's past 5:30pm today
    if (
      currentDateTime.hour > 17 ||
      (currentDateTime.hour === 17 && currentDateTime.minute >= 30)
    ) {
      // Extract day and month components from luxonDate and tomorrow
      const luxonDateDay = luxonDate.day;
      const luxonDateMonth = luxonDate.month;
      const tomorrowDay = tomorrow.day;
      const tomorrowMonth = tomorrow.month;
  
      // Check if the day and month of luxonDate match those of tomorrow
      if (luxonDateDay === tomorrowDay && luxonDateMonth === tomorrowMonth) {
          return true;
      }
    }
    
    // Disable Specific Date
    // if (year === 2024 && month === 9 && (dayOfMonth === 7 || dayOfMonth === 8 || dayOfMonth === 9 || dayOfMonth === 10 || dayOfMonth === 14 || dayOfMonth === 15 || dayOfMonth === 16 || dayOfMonth === 17 || dayOfMonth === 18)) {
    //     return true;
    // }

    return false;
  };
  

  const modifiers = {
    weekends: { daysOfWeek: [0, 6] },
  };

  return (
    <>
      <div className="calendar z-30 flex flex-col items-center text-white">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          modifiers={{ ...modifiers, disabled: isDisabled }}
        />
      </div>
      <StartOrderButton selectedDate={selected}/>
    </>
  
  );
}

export default OrderCalendar
