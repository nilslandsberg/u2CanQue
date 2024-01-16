import React from 'react';
import OrderCalendar from '../components/OrderCalendar';

export default function Menu() {

  return (
    <>
      <div className="relative flex flex-col items-center pt-[75px] bg-black pb-4">
        <div className="w-1/2 md:w-1/3 z-20 items-center text-white text-center">
          <br />
          <br />
          <p className="text-2xl font-bold italic">&quot;Ordering Tomorrow&#39;s Lunch Today&quot;</p>
          <br />
          <p>At U 2 Can Que, we believe in the magic of low and slow-smoked meats, and we want you to experience the peak of flavor in every bite. That&#39;s why we encourage you to plan ahead and order tomorrow&#39;s lunch today. Our meticulous smoking process demands time and patience, ensuring that each dish reaches its full potential in flavor and tenderness.</p>
          <br />
          <br />
          <p>Our menu changes daily.  Select a date on the calendar below to see our offerings for the day.</p>
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
