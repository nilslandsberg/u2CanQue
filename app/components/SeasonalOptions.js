import Image from 'next/image';
import React from 'react';
import { christmasDateCheck, easterDateCheck, saleEndMessage, thanksgivingDateCheck } from '../utils/dateCheck';
import AddToOrderButton from './AddToOrderButton';

const SeasonalOptions = () => {
  const currentDate = new Date()
  const currentYear = currentDate.toLocaleDateString('en-US', { year: 'numeric'});


  const christmasSale = christmasDateCheck();
  
  if (christmasSale) {
    return (
      <>
      <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
        Christmas Orders Available Through December 20th!
      </div>
      <div className="text-white">Hams For Sale! Orders close on 12/20!</div>
      </>
    )
  } 
  
  const easterSale = easterDateCheck(currentYear, currentDate);

  if (easterSale.isItEaster) {
    return (
      <>
      <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
        Easter Orders Available Through {saleEndMessage(easterSale.easterSaleEnd)}!
      </div>
      <div className="text-white">Easter Sale!</div>
      </>
    )
  }
  
  const thanksgivingSale = thanksgivingDateCheck(currentYear, currentDate)

  if (thanksgivingSale.isItThanksgiving) {
    return (
      <>
        <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
          Thanksgiving Orders Available Through {saleEndMessage(thanksgivingSale.thanksgivingSaleEnd)}!
        </div>
        <div className="text-white">Thanksgiving Sale!</div>
      </>
    )
  }

  return (
    <>
      <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
        No Holiday Specials Available at this time!
      </div>
      <div className="text-white">Check Back Soon!</div>
    </>
  )
}


export default SeasonalOptions;
