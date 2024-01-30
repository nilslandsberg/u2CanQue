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
    const currentDateTime = DateTime.now();
    const tomorrow = currentDateTime.plus({ days: 1 });
    console.log(date)
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
    if (date < currentDateTime) {
      return true;
    }
  
    // Disable tomorrow's date if it's past 5:30pm today
    if (
      currentDateTime.hour >= 17 &&
      (currentDateTime.hour > 17 || (currentDateTime.hour === 13 && currentDateTime.minute >= 30))
    ) {
      if (currentDateTime.plus({ days: 1 }).toISODate() === tomorrow.toISODate()) {
        return true;
      }
    }
  
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