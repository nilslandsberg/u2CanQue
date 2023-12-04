import React from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';

const WelcomeComponent = () => {
  const message =
    "Hello, Barbecue Enthusiasts and Friends,<br><br>I'm Robert Manion, your pitmaster and the proud owner of U 2 Can Que. It brings me great joy to welcome you to our virtual home, where the irresistible aroma of barbecue and a passion for community come together.<br><br>At U 2 Can Que, we're more than a store – we're a hub for all things barbecue. Whether you're a seasoned pitmaster or just starting your journey, we're here to provide you with top-notch barbecue supplies, hands-on classes, and a menu that promises to elevate every occasion.<br><br>Our commitment goes beyond great barbecue; it's about building a community. I invite you to explore our offerings, join us for classes, and savor the flavors of our freshly cooked meals. As a nationally recognized and award-winning pitmaster, I'm dedicated to sharing my expertise and ensuring that U 2 Can Que becomes your go-to destination for all things barbecue.<br><br>Thank you for being part of our barbecue family. Let's fire up those grills and create unforgettable moments together!<br><br>Best smoke,<br>Robert Manion<br>Owner, U 2 Can Que";

  return (
    <>
      <div className="flex flex-col lg:flex-row space-around items-center justify-center bg-black border-t border-gray-200 dark:border-gray-600 py-12 px-12" id="about">
        <div className="md:w-2/3 lg:w-1/2 xl:w-1/3 px-8 flex-shrink-0">
          <div className="border-2 border-white overflow-hidden" style={{ width: '100%', position: 'relative' }}>
            <Image src="/images/RobManion.jpeg" alt="Rob Manion Picture" width={900} height={900} className='p-2'/>
          </div>
        </div>
        <div className="text-white text-left py-6 px-12 md:w-1/2">
          {parse(message)}
        </div>
      </div>
    </>
  );
};

export default WelcomeComponent;
