"use client";
import { hideNavBarMobileLinks, showNavBarMobileLinks } from '@/redux/features/button-toggle-slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



function NavBarMobileMenuButton() {
  const isToggled = useSelector((state) => state.buttonToggle.navBarLinksShown);
  const dispatch = useDispatch();
  console.log(isToggled);
  const toggleMenu = () => {
    if (isToggled === false) {
      dispatch(showNavBarMobileLinks());
      console.log("show")
    } else {
      dispatch(hideNavBarMobileLinks());
      console.log("hide")
    }
  }

  return (
    <div className="mobile-menu-button md:hidden flex items-center">
      <button onClick={toggleMenu}>
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  )
}

export default NavBarMobileMenuButton