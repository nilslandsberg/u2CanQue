import React from 'react'
import { christmasDateCheck, easterDateCheck, saleEndMessage, thanksgivingDateCheck } from '../utils/dateCheck';

const HolidayLink = ({ className }) => {
  const currentDate = new Date()
  const currentYear = currentDate.toLocaleDateString('en-US', { year: 'numeric'});


  const christmasSale = christmasDateCheck();
  
  if (christmasSale) {
    return (
      <>
        <a className={className} href="/order/christmas">Christmas Specials</a>
        <a className={className} href="/order/christmas/cart">View Christmas Cart</a>
      </>
    )
  } 
  
  const easterSale = easterDateCheck(currentYear, currentDate);

  if (easterSale.isItEaster) {
    return (
      <>
        <a className={className} href="/order/easter">Easter Specials</a>
        <a className={className} href="/order/easter/cart">View Easter Cart</a>
      </>
    )
  }
  
  const thanksgivingSale = thanksgivingDateCheck(currentYear, currentDate)

  if (thanksgivingSale.isItThanksgiving) {
    return (
      <>
        <a className={className} href="/order/thanksgiving">Thanksgiving Specials</a>
        <a className={className} href="/order/thanksgiving/cart">View Thanksgiving Cart</a>
      </>
    )
  }

  return (
    <></>
  )
}

export default HolidayLink