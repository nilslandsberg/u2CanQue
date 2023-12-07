import React from 'react';

const MenuLinks = () => {
  return (
    <div className="bg-black text-white fixed top-0 left-0 right-0 z-30 pt-[90px]">
      <div className='text-2xl font-bold italic text-center py-2'>
        <p>Menu</p>
      </div>
      <nav className="text-lg font-semibold pb-2 flex flex-row text-center md:justify-center sm:justify-start items-center border-b border-white overflow-x-auto">
        <a href="/order/appetizers" className="menu-link hover:text-slate-300 px-4">Appetizers</a>
        <a href="/order/lunch" className="menu-link hover:text-slate-300 px-4">Lunch Options</a>
        <a href="/order/bulkbbq" className="menu-link hover:text-slate-300 px-4">Bulk BBQ</a>
        <a href="/order/seasonal" className="menu-link hover:text-slate-300 px-4">Seasonal</a>
      </nav>
    </div>
  );
};

export default MenuLinks;
