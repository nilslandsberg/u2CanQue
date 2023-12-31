import React from 'react'

function NavBarLinks() {
  return (
    <>
      <div className="items-center space-x-5 justify-between md:flex hidden">
        <a className=" hover:text-gray-400" href="/#about">About Us</a>
        <a className=" hover:text-gray-400" href="/services">Services</a>
        <a className=" hover:text-gray-400" href="/catering">Catering</a>
        <a className="py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300" href="/order">Order Online</a>
      </div>
    </>
  )
}

export default NavBarLinks