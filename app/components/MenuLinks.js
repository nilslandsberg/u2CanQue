"use client";

import React from 'react';

const MenuLinks = () => {
  const scrollToMenuSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      let position = section.getBoundingClientRect();
      window.scrollTo({
        top: position.top + window.scrollY - 172,
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
        <a className="menu-link hover:text-slate-300 px-4 cursor-pointer" onClick={() => scrollToMenuSection('appetizers')}>Appetizers</a>
        <a className="menu-link hover:text-slate-300 px-4 cursor-pointer" onClick={() => scrollToMenuSection('lunch-options')}>Lunch Options</a>
        <a className="menu-link hover:text-slate-300 px-4 cursor-pointer" onClick={() => scrollToMenuSection('bulk-bbq')}>Bulk BBQ | Sides</a>
      </nav>
    </div>
  );
};

export default MenuLinks;
