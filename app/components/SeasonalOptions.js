import Image from 'next/image';
import React from 'react';
import { lunchOptions } from '../menu-data';
import parse from 'html-react-parser';
import { christmasDateCheck, easterDateCheck, thanksgivingDateCheck } from '../utils/dateCheck';
import AddToOrderButton from './AddToOrderButton';

const SeasonalOptions = () => {
  const currentDate = new Date("2024-11-10")
  const currentYear = currentDate.toLocaleDateString('en-US', { year: 'numeric'});


  const christmasSale = christmasDateCheck();
  const easterSale = easterDateCheck(currentYear, currentDate);
  const thanksgivingSale = thanksgivingDateCheck(currentYear, currentDate)

  if (christmasSale) {
    return (
      <>
      <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
        Christmas Orders Available Through December 20th!
      </div>
      <div className="text-white">Hams For Sale! Orders close on 12/20!</div>
      </>
    )
  } else if (easterSale.isItEaster) {
    return (
      <>
      <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
        Easter Orders Available Through {easterSale.easterSaleEnd.toLocaleDateString()}!
      </div>
      <div className="text-white">Easter Sale!</div>
      </>
    )
  } else if (thanksgivingSale.isItThanksgiving) {
    return (
      <>
        <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
          Thanksgiving Orders Available Through {thanksgivingSale.thanksgivingSaleEnd.toLocaleDateString()}!
        </div>
        <div className="text-white">Thanksgiving Sale!</div>
      </>
    )
  } else {
    console.log("There are no holidays coming up")
    return (
      <>
        <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
          No Holiday Specials Available at this time!
        </div>
        <div className="text-white">Check Back Soon!</div>
      </>
    )
  }
}

export default SeasonalOptions;
