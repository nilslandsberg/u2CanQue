import Image from 'next/image';
import React from 'react';
import { appetizerData } from '../menu-data';
import parse from 'html-react-parser';


const AppetizerMenu = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-auto">
      {appetizerData.map((item) => (
        <div key={item.title} className="bg-black p-4 text-white text-center rounded-md shadow-md">
          <div className="relative h-40 mb-2 rounded-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-lg font-semibold mb-1">{item.name}</div>
          <div className="border-b-2 border-gray-300 mb-2"></div>
          {parse(item.description)}
          <p className="text-green-600 text-center font-semibold pt-4">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AppetizerMenu;
