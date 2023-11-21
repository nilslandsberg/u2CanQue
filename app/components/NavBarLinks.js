import React from 'react'

function NavBarLinks() {
  return (
    <>
      <div className="flex items-center space-x-5 justify-between hidden md:flex">
        <a className=" hover:text-gray-400" href="#">Home</a>
        <a className=" hover:text-gray-400" href="#">About Us</a>
        <a className=" hover:text-gray-400" href="#">Menus</a>
        <a className=" hover:text-gray-400" href="#">Services</a>
      </div>
    </>
  )
}

export default NavBarLinks