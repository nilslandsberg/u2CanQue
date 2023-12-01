import React from 'react';
import parse from 'html-react-parser';

const WelcomeComponent = () => {
  const message = "Hello, barbecue enthusiasts and friends,<br><br>I'm Robert Manion, your pitmaster and the proud owner of U 2 Can Que. It brings me great joy to welcome you to our virtual home, where the irresistible aroma of barbecue and a passion for community come together.<br><br>At U 2 Can Que, we're more than a store – we're a hub for all things barbecue. Whether you're a seasoned pitmaster or just starting your journey, we're here to provide you with top-notch barbecue supplies, hands-on classes, and a menu that promises to elevate every occasion.<br><br>Our commitment goes beyond great barbecue; it's about building a community. I invite you to explore our offerings, join us for classes, and savor the flavors of our freshly cooked meals. As a nationally recognized and award-winning pitmaster, I'm dedicated to sharing my expertise and ensuring that U 2 Can Que becomes your go-to destination for all things barbecue.<br><br>Thank you for being part of our barbecue family. Let's fire up those grills and create unforgettable moments together!<br><br>Best smoke,<br>Robert Manion<br>Owner, U 2 Can Que";

  return (
    <div className="text-white text-left py-6 px-12">
    {parse(message)}
    </div>
  )
}

export default WelcomeComponent