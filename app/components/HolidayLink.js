import React from 'react'
import { christmasDateCheck, easterDateCheck, memorialDayDateCheck, saleEndMessage, thanksgivingDateCheck } from '../utils/dateCheck';

const HolidayLink = ({ className }) => {
  const christmasSale = christmasDateCheck();
  
  if (christmasSale) {
    return (
      <>
        <a className={className} href="/order/christmas">Christmas Specials</a>
        <a className={className} href="/order/christmas/cart">View Christmas Cart</a>
      </>
    )
  } 
  
  const easterSale = easterDateCheck();

  if (easterSale.isItEaster) {
    return (
      <>
        <a className={className} href="/order/easter">Easter Specials</a>
        <a className={className} href="/order/easter/cart">View Easter Cart</a>
      </>
    )
  }
  
  const thanksgivingSale = thanksgivingDateCheck()

  if (thanksgivingSale.isItThanksgiving) {
    return (
      <>
        <a className={className} href="/order/thanksgiving">Thanksgiving Specials</a>
        <a className={className} href="/order/thanksgiving/cart">View Thanksgiving Cart</a>
      </>
    )
  }

  const memorialDaySale = memorialDayDateCheck();

  if (memorialDaySale.isItMemorialDay) {
    return (
      <>
        <a className={className} href="/order/memorial-day">Memorial Day Specials</a>
        <a className={className} href="/order/memorial-day/cart">View Memorial Day Cart</a>
      </>     
    )
  }

  return (
    <></>
  )
}

export default HolidayLink