import React from 'react';
import OrderCalendar from '../components/OrderCalendar';

export default function Menu() {

  return (
    <>
      <div className="relative flex flex-col items-center pt-[75px] bg-black pb-4">
        <div className="sm:w-1/4 lg:w-1/2 z-20 items-center text-white text-center">
          <br />
          <br />
          <p className="text-2xl font-bold italic">&quot;Ordering Tomorrow&#39;s Lunch Today&quot;</p>
          <br />
          <p>At U 2 Can Que, we believe in the magic of low and slow-smoked meats, and we want you to experience the peak of flavor in every bite. That&#39;s why we encourage you to plan ahead and order tomorrow&#39;s lunch today. Our meticulous smoking process demands time and patience, ensuring that each dish reaches its full potential in flavor and tenderness.</p>
          <br />
          <p className="font-semibold">Remember, to savor our delectable creations tomorrow, be sure to place your orders before 5:30 PM today.</p>
          <br />
          <p className="text-xl font-bold italic">Our menu changes daily.</p>
          <p className="text-xl font-bold italic"> Select a date on the calendar to explore our menu.</p>
          <br />
          <p className="text-xl font-bold">We will not be available for orders during the week of June 10th through the 14th.  We will resume kitchen operations on June 17th.  We appreciate your understanding!</p>
          <OrderCalendar />
        </div>
        {/* <video
          className="absolute z-10 w-full h-48 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/fireBackground.mp4" />
        </video> */}
      </div>
    </>
  );
}