import React from 'react';
import MenuLinks from '../components/MenuLinks';
import Image from 'next/image';

export default function Menu() {
  return (
    <>
      <main>
        <MenuLinks />
        <div className="relative flex flex-col items-center pt-[190px] h-screen bg-black overflow-hidden">
          <div className="w-1/2 md:w-1/3 z-20 pb-12 text-white text-center overflow-auto">
            <br />
            <br />
            <p className="text-2xl font-bold italic">&quot;Ordering Tomorrow&#39;s Lunch Today&quot;</p>
            <br />
            <p>At U 2 Can Que, we believe in the magic of low and slow-smoked meats, and we want you to experience the peak of flavor in every bite. That&#39;s why we encourage you to plan ahead and order tomorrow&#39;s lunch today. Our meticulous smoking process demands time and patience, ensuring that each dish reaches its full potential in flavor and tenderness.</p>
            <br />
            <br />
            <p>By ordering in advance, you guarantee that your lunch will be prepared with the utmost care, delivering a smoky symphony of taste that will leave your taste buds dancing. Explore our mouthwatering menu and click one of the links above to view our menus. From succulent pork belly burnt ends to award-winning baby back ribs, our offerings are crafted to perfection.</p>
            <br />
            <br />
            <p>Don&#39;t miss out on the opportunity to savor the true essence of barbecue. Order in advance, and let the anticipation build as you look forward to a lunchtime experience that transcends the ordinary. U 2 Can Que – where today&#39;s selection becomes tomorrow&#39;s delight!</p>
          </div>
          <video
            className="absolute z-10 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/videos/fireBackground.mp4" />
          </video>
          
        </div>
      </main>
    </>
  );
}
