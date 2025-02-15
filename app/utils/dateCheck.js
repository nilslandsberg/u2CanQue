import holidays from 'date-holidays';

export const christmasDateCheck = () => {
  const currentDate = new Date();

  const christmasStart = new Date();
  christmasStart.setMonth(11);
  christmasStart.setDate(1);
  christmasStart.setHours(0, 0, 0, 0); // Remove the time part

  const christmasEnd = new Date();
  christmasEnd.setMonth(11);
  christmasEnd.setDate(23);

  if (currentDate >= christmasStart && currentDate <= christmasEnd) {
    return true;
  } else {
    return false;
  }
  
}

function findHolidayByName(holidays, holidayName) {
  return holidays.find(holiday => holiday.name === holidayName);
}

function getOneMonthPrior(utcDateString) {
  const utcDate = new Date(utcDateString);
  // set the utcDate one month prior to the utcDateString provided
  utcDate.setUTCMonth(utcDate.getUTCMonth() -1);
  // return updated utcDate
  return utcDate;
}

function getFiveDaysPrior(utcDateString) {
  const utcDate = new Date(utcDateString);
  // set the utcDate five days prior to the utcDateString provided
  utcDate.setUTCDate(utcDate.getUTCDate() -2);
  // return updated utcDate
  return utcDate;
}

export const easterDateCheck = () => {
  const currentDate = new Date();
  const currentYear = currentDate.toLocaleDateString('en-US', { year: 'numeric'});

  const hd = new holidays('US');
  const holiday = hd.getHolidays(currentYear)

  const holidayNameToFind = "Easter Sunday";
  const foundHoliday = findHolidayByName(holiday, holidayNameToFind)
  const easterDate = new Date(foundHoliday.date);
  const easterSaleStart = getOneMonthPrior(easterDate);
  const easterSaleEnd = getFiveDaysPrior(easterDate);

  if (currentDate >= easterSaleStart && currentDate <= easterSaleEnd) {
    return { isItEaster: true, easterSaleEnd: easterSaleEnd }
  } else {
    return { isItEaster: false }
  }
}

export const thanksgivingDateCheck = () => {
  const currentDate = new Date();
  const currentYear = currentDate.toLocaleDateString('en-US', { year: 'numeric'});

  const hd = new holidays('US');
  const holiday = hd.getHolidays(currentYear);
  
  const holidayNameToFind = "Thanksgiving Day"
  const foundHoliday = findHolidayByName(holiday, holidayNameToFind);
  const thanksgivingDate = new Date(foundHoliday.date);

  const thanksgivingSaleStart = new Date();
  thanksgivingSaleStart.setMonth(10);
  thanksgivingSaleStart.setDate(1);
  thanksgivingSaleStart.setHours(0, 0, 0, 0); // Remove the time part

  const thanksgivingSaleEnd = getFiveDaysPrior(thanksgivingDate);
  console.log("thanksgivingSaleStart: ", thanksgivingSaleStart);
  console.log("thanksgivingSaleEnd: ", thanksgivingSaleEnd);
  if (currentDate >= thanksgivingSaleStart && currentDate <= thanksgivingSaleEnd) {
    return { isItThanksgiving: true, thanksgivingSaleEnd: thanksgivingSaleEnd }
  } else {
    return { isItThankgiving: false }
  }
}

export const memorialDayDateCheck = () => {
  const currentDate = new Date();
  const currentYear = currentDate.toLocaleDateString('en-US', { year: 'numeric'});

  const hd = new holidays('US');
  const holiday = hd.getHolidays(currentYear);
  
  const holidayNameToFind = "Memorial Day"
  const foundHoliday = findHolidayByName(holiday, holidayNameToFind);
  const memorialDayDate = new Date(foundHoliday.date);

  const memorialDaySaleStart = getOneMonthPrior(memorialDayDate);
  const memorialDaySaleEnd = getFiveDaysPrior(memorialDayDate);

  if (currentDate >= memorialDaySaleStart && currentDate <= memorialDaySaleEnd) {
    return { isItMemorialDay: true, memorialDaySaleEnd: memorialDaySaleEnd }
  } else {
    return { isItMemorialDay: false }
  }
}

export const independenceDayDateCheck = () => {
  const currentDate = new Date();
  
  const independenceDayStart = new Date();
  independenceDayStart.setMonth(5);
  independenceDayStart.setDate(4);

  const independenceDayEnd = new Date();
  independenceDayEnd.setMonth(6);
  independenceDayEnd.setDate(2);

  if (currentDate >= independenceDayStart && currentDate <= independenceDayEnd) {
    return true;
  } else {
    return false;
  }
  
}

export const isItRibsTime = () => {
  const currentDate = new Date();
  const ribsFlashSaleStart = new Date();
  ribsFlashSaleStart.setMonth(0);
  ribsFlashSaleStart.setDate(27);

  const ribsFlashSaleEnd = new Date();
  ribsFlashSaleEnd.setMonth(1);
  ribsFlashSaleEnd.setDate(8);
  ribsFlashSaleEnd.setHours(17, 30, 0);

  if (currentDate >= ribsFlashSaleStart && currentDate <= ribsFlashSaleEnd) {
    return true;
  } else {
    return false;
  }
}

export const saleEndMessage = (saleEnd) => {
  `Available Through ${saleEnd.toLocaleDateString()}!`
}

export const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
