import Image from 'next/image'
import React from 'react'
import NavBarLinks from './NavBarLinks'
import NavBarMobileLinks from './NavBarMobileLinks'
import NavBarMobileMenuButton from './NavBarMobileMenuButton'


const NavBar = () => {
  return (
    <div className="navbar-container absolute">
      <nav className={"bg-slate-600 dark:bg-gray-900 fixed w-full z-40 top-0 left-0 border-b border-gray-200 dark:border-gray-600"}>
        <div className="max-w-7xl mx-auto py-3 px-2 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between space-x-4">
              <a className=" hover:text-gray-400" href="/">
                <Image src='/images/U2CanQueLogo.svg' alt="logo" width={50} height={50} priority={true} />
              </a>
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