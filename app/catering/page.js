import React from 'react';
import Contact from '../components/Contacts';

export default function Catering() {
  return (
    <>
      <main>
        <div className="relative flex flex-col items-center pt-[65px] h-[175vh] overflow-hidden bg-black">
          <div className="w-full text-white text-center mt-2">
            <div className="z-30 p-5 text-2xl bg-slate-600 text-white text-center border-b-2">
              Catering
            </div>
            <div className="w-1/3 mx-auto pt-4">
              <p>Indulge your guests in the unparalleled flavors of U 2 Can Que at your next event! Elevate the experience with our mouthwatering barbecue that brings the essence of slow-smoked perfection to your celebration. Whether it's a corporate gathering, wedding, or special occasion, our catering services are tailored to make your event memorable.</p>
              <br/>
              <br/>
              <p>To get started on crafting a bespoke culinary experience for your guests, please fill out the form below. Let us know the size of your event and the desired date, and our catering team will reach out to you with personalized options. Bring the taste of U 2 Can Que to your special moments – where every bite is a celebration!</p>
            </div>
            <div className="w-1/3 mx-auto">
              <Contact />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
