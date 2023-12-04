import React from 'react';

const MenuLinks = () => {
  return (
    <div className="bg-black text-white fixed top-0 left-0 right-0 z-30 pt-[120px]">
      <div className='text-2xl font-bold italic text-center py-2'>"Ordering Tomorrow's Lunch Today"</div>
      <nav className="text-lg font-semibold mb-1 flex flex-row justify-around text-center items-center border-b border-white ">
        <a href="/order#appetizers" className="hover:text-slate-300">Appetizers</a>
        <a href="/order#lunch" className="hover:text-slate-300">Lunch Options</a>
        <a href="/order#bulkbbq" className="hover:text-slate-300">Bulk BBQ</a>
      </nav>
    </div>
  );
};

export default MenuLinks;
