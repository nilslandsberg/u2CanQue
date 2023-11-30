import React from 'react';
import AppetizerMenu from '../components/AppetizerMenu';

export default function Menu() {
  return (
    <>
      <main>
        <div className="relative flex flex-col items-center pt-[100px] min-h-screen  bg-black">
          <div className="divide-y-2 divide-double divide-white w-full">
            <div className="text-white z-30 py-5 text-center">Menu Carousel Navbar?</div>
            <div className="z-30 p-5 text-2xl text-white text-center">Appetizers</div>
            <AppetizerMenu />
          </div>
        </div>
      </main>
    </>
  );
}
