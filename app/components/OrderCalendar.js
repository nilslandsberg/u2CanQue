'use client';

import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import StartOrderButton from "./StartOrderButton";

const OrderCalendar = () => {
  const [selected, setSelected] = useState();
  console.log(selected)

  const isDisabled = (date) => {
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const month = date.getMonth();
    const currentDateTime = new Date();

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

    // Disable past dates and current date
    if (date <= currentDateTime) {
      return true;
    }

    return false;
  };

  const modifiers = {
    weekends: { daysOfWeek: [0, 6] },
  };

  return (
    <>
      <div className="calendar z-30 text-white">
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