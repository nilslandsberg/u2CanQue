import Image from 'next/image';
import React from 'react';
import { lunchOptions } from '../menu-data';
import parse from 'html-react-parser';
import { christmasDateCheck, easterDateCheck } from '../utils/dateCheck';
import AddToOrderButton from './AddToOrderButton';

const SeasonalOptions = () => {
  const currentDate = new Date()
  const currentYear = currentDate.toLocaleDateString('en-US', { year: 'numeric'});


  const christmasSale = christmasDateCheck();

  // if (christmasSale) {
  //   return (
  //     <>
  //     <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
  //       Christmas Orders Available Through December 20th!
  //     </div>
  //     <div className="text-white">Hams For Sale! Orders close on 12/20!</div>
  //     </>
  //   )
  // }

  const easterTrialDate = new Date("2023-03-22T04:00:00.000")
  const easterDate = easterDateCheck(currentYear, easterTrialDate);
  
  if (easterDate.isItEaster) {
    return (
      <>
      <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
        Easter Orders Available Through {easterDate.easterSaleEnd.toLocaleDateString()}!
      </div>
      <div className="text-white">Easter Sale!</div>
      </>
    )
  }
 
  return (
    <>
      <div className="z-30  bg-slate-600 p-5 text-2xl text-white text-center">
        Seasonal Options
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-auto py-5 px-2">
        {lunchOptions.map((item) => (
          <div
            key={item.title}
            className="card bg-slate-600 p-4 text-white text-center rounded-md shadow-md border border-white flex flex-col justify-between"
          >
            <div className="relative h-40 mb-2 rounded-md overflow-hidden">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                style={{objectFit: "contain"}} 
              />
            </div>
            <div className="text-lg font-semibold mb-1">{item.name}</div>
            <div className="border-b-2 border-gray-300 mb-2"></div>
            <div className="flex-grow mb-2">{parse(item.description)}</div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <p className="text-orange-600 font-semibold pt-4">Price: ${item.price}</p>
              </div>
              <AddToOrderButton item={item} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SeasonalOptions;
