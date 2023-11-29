import React from 'react'

function NavBarLinks() {
  return (
    <>
      <div className="flex items-center space-x-5 justify-between hidden md:flex">
        <a className=" hover:text-gray-400" href="/">Home</a>
        <a className=" hover:text-gray-400" href="about">About Us</a>
        <a className=" hover:text-gray-400" href="menus">Menus</a>
        <a className=" hover:text-gray-400" href="services">Services</a>
      </div>
    </>
  )
}

export default NavBarLinks