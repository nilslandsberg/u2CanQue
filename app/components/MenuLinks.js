"use client";

import React from 'react';

const MenuLinks = () => {
  const scrollToAppetizers = () => {
    const appetizersSection = document.getElementById('appetizers');
    if (appetizersSection) {
      let position = appetizersSection.getBoundingClientRect();
      window.scrollTo({
        top: position.top + window.scrollY -172,
        behavior: 'smooth',
      });
    }
  };

  const scrollToLunchOptions = () => {
    const lunchOptionsSection = document.getElementById('lunch-options');
    if (lunchOptionsSection) {
      let position = lunchOptionsSection.getBoundingClientRect();
      window.scrollTo({
        top: position.top + window.scrollY -172,
        behavior: 'smooth',
      });
    }
  };

  const scrollToBulkBbq = () => {
    const bulkBbqSection = document.getElementById('bulk-bbq');
    if (bulkBbqSection) {
      let position = bulkBbqSection.getBoundingClientRect();
      window.scrollTo({
        top: position.top + window.scrollY -172,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-black text-white fixed top-0 left-0 right-0 z-30 pt-[90px]">
      <div className='text-2xl font-bold italic text-center py-2'>
        <p>Menu</p>
      </div>
      <nav className="text-lg font-semibold pb-2 flex flex-row text-center md:justify-center sm:justify-start items-center border-b border-white overflow-x-auto">
        <a className="menu-link hover:text-slate-300 px-4 cursor-pointer" onClick={scrollToAppetizers}>Appetizers</a>
        <a className="menu-link hover:text-slate-300 px-4 cursor-pointer" onClick={scrollToLunchOptions}>Lunch Options</a>
        <a className="menu-link hover:text-slate-300 px-4 cursor-pointer" onClick={scrollToBulkBbq}>Bulk BBQ | Sides</a>
      </nav>
    </div>
  );
};

export default MenuLinks;
