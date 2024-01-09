'use client';

import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const OrderCalendar = () => {
  const [selected, setSelected] = React.useState();
  console.log(selected)

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0) and Saturday (6)
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
        modifiers={modifiers}
        disabled={isWeekend}
      />
    </div>

    </>
  
  );
}

export default OrderCalendar