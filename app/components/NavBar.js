import Image from 'next/image'
import React from 'react'
import NavBarLinks from './NavBarLinks'
import NavBarMobileLinks from './NavBarMobileLinks'
import NavBarMobileMenuButton from './NavBarMobileMenuButton'


const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className={"bg-slate-600 opacity-90 dar:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"}>
        <div className="max-w-7xl mx-auto py-5 px-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between space-x-4">
              <div className="font-bold">U 2 Can Cue, LLC</div>
              <a className="py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300" href="#">Order Online</a>
            </div>
            <NavBarLinks />
            <NavBarMobileMenuButton />
          </div>
        </div>
        <NavBarMobileLinks />
      </nav>
    </div>
  )
}

export default NavBar