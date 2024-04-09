import holidays from 'date-holidays';

export const christmasDateCheck = () => {
  const currentDate = new Date();

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
  utcDate.setUTCDate(utcDate.getUTCDate() -5);
  // return updated utcDate
  return utcDate;
}

export const easterDateCheck = () => {
  const currentDate = new Date();
  const currentYear = currentDate.toLocaleDateString('en-US', { year: 'numeric'});

  const hd = new holidays('US');
  const holiday = hd.getHolidays(currentYear)
  console.log(holiday)
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

  const thanksgivingSaleStart = getOneMonthPrior(thanksgivingDate);
  const thanksgivingSaleEnd = getFiveDaysPrior(thanksgivingDate);

  if (currentDate >= thanksgivingSaleStart && currentDate <= thanksgivingSaleEnd) {
    return { isItThanksgiving: true, thanksgivingSaleEnd: thanksgivingSaleEnd }
  } else {
    return { isItThankgiving: false }
  }
}

export const saleEndMessage = (saleEnd) => {
  `Available Through ${saleEnd.toLocaleDateString()}!`
}

export const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];