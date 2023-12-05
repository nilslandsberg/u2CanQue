import Image from 'next/image';
import React from 'react';
import { appetizerData } from '../menu-data';
import parse from 'html-react-parser';

const AppetizerMenu = () => {
  return (
    <>
      <div className="z-30 p-5 text-2xl bg-slate-600 text-white text-center">
        Appetizers
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-auto py-5 px-2">
        {appetizerData.map((item) => (
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
              <button className="py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300">
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppetizerMenu;
