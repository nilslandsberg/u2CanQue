import React from 'react'
import holidays from 'date-holidays';

export const christmasDateCheck = (currentDate) => {
  const christmasStart = new Date();
  christmasStart.setMonth(10);
  christmasStart.setDate(27);

  const christmasEnd = new Date();
  christmasEnd.setMonth(11);
  christmasEnd.setDate(20);

  if (currentDate >= christmasStart && currentDate <= christmasEnd) {
    return true;
  } else {
    return false;
  }
  
}

function findHolidayByName(holidays, holidayName) {
  return holidays.find(holiday => holiday.name === holidayName);
}

export const easterDateCheck = (currentYear, currentDate) => {
  const hd = new holidays('US');
  const holiday = hd.getHolidays(2026)
  
  const holidayNameToFind = "Easter Sunday";
  const foundHoliday = findHolidayByName(holiday, holidayNameToFind)
  const easterDate = new Date(foundHoliday.date);
  console.log(easterDate);
  return easterDate;
}