import React from 'react'
import { capitalizeFirstLetter } from '../utils/stringManipulation';

const OrderDate = ({ orderDate, dayOfWeek }) => {
  
  const date = new Date(orderDate);
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  
  // Get month and day from date object
  const monthIndex = date.getUTCMonth();
  const day = date.getUTCDate();

  // Function to add appropriate suffix for the date
  const getDayWithSuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return day + "th";
    }

    switch (day % 10) {
      case 1: return day + "st";
      case 2: return day + "nd";
      case 3: return day + "rd";
      default: return day + "th";
    }
  };

  const dateOfOrder = `${months[monthIndex]} ${getDayWithSuffix(day)}`
  
  return (
    <div className="text-2xl italic font-bold text-center mb-6">Order Summary for {capitalizeFirstLetter(dayOfWeek)}, {dateOfOrder}</div>
  )
}

export default OrderDate