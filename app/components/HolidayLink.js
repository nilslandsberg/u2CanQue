import React from 'react'
import { christmasDateCheck, easterDateCheck, saleEndMessage, thanksgivingDateCheck } from '../utils/dateCheck';

const HolidayLink = ({ className }) => {
  const currentDate = new Date()
  const currentYear = currentDate.toLocaleDateString('en-US', { year: 'numeric'});


  const christmasSale = christmasDateCheck();
  
  if (christmasSale) {
    return (
      <a className={className} href="/christmas">Christmas Specials</a>
    )
  } 
  
  const easterSale = easterDateCheck(currentYear, currentDate);

  if (easterSale.isItEaster) {
    return (
      <>
        <a className={className} href="/easter">Easter Specials</a>
      </>
    )
  }
  
  const thanksgivingSale = thanksgivingDateCheck(currentYear, currentDate)

  if (thanksgivingSale.isItThanksgiving) {
    return (
      <>
        <a className={className} href="/thanksgiving">Thanksgiving Specials</a>
      </>
    )
  }

  return (
    <></>
  )
}

export default HolidayLink