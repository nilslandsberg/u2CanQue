import React from 'react';
import AppetizerMenu from '../components/AppetizerMenu';
import MenuLinks from '../components/MenuLinks';
import LunchOptions from '../components/LunchOptions';
import BulkBbq from '../components/BulkBbq';

export default function Menu() {
  return (
    <>
      <main>
        <MenuLinks />
        <div className="relative flex flex-col items-center pt-[200px] min-h-screen bg-black">
          <div className="divide-y-2 divide-double divide-white w-full">
            <AppetizerMenu />
            <LunchOptions />
            <BulkBbq />
          </div>
        </div>
      </main>
    </>
  );
}
