import React from 'react'
import { christmasDateCheck, easterDateCheck, independenceDayDateCheck, memorialDayDateCheck, saleEndMessage, thanksgivingDateCheck } from '../utils/dateCheck';
import { IoIosArrowDown } from "react-icons/io";
import { capitalizeFirstLetter } from '../utils/stringManipulation';

const HolidayLink = ({ className }) => {
  const christmasSale = christmasDateCheck();

  let holiday="";

  if (christmasSale) {
    holiday="christmas"
  } 
  
  const easterSale = easterDateCheck();

  if (easterSale.isItEaster) {
    holiday="easter"
  }
  
  const thanksgivingSale = thanksgivingDateCheck()

  if (thanksgivingSale.isItThanksgiving) {
    holiday="thanksgiving"
  }

  const memorialDaySale = memorialDayDateCheck();

  if (memorialDaySale.isItMemorialDay) {
    holiday="memorial-day"
  }

  const independenceDaySale = independenceDayDateCheck();

  if (independenceDaySale) {
    holiday="independence-day"
  }

  return (
    <>
      {holiday && (
        <div className={`relative group px-2 py-3 transition-all ${className ? className : ""}`}>
          <div className="flex cursor-pointer items-center gap-2 group-hover:text-gray-400">
            <span>Holiday Orders</span>
            <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
          </div>
          <div className="absolute left-0 top-10 hidden w-auto flex-col gap-1 rounded-xl bg-white py-3 shadow-md transition-all group-hover:flex text-black">
            <a className="hover:text-gray-400 flex items-center py-1 pl-6 pr-2" href={`/order/${holiday}`}>{capitalizeFirstLetter(holiday)} Specials</a>
            <a className="hover:text-gray-400 flex items-center py-1 pl-6 pr-2" href={`/order/${holiday}/cart`}>{capitalizeFirstLetter(holiday)} Cart</a>
          </div>
        </div>
      )}
    </>
  )
}

export default HolidayLink