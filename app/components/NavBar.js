import Image from 'next/image'
import React from 'react'


const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className={"bg-slate-600 opacity-90 dar:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"}>
      
        <div className="max-w-7xl mx-auto py-5 px-3  text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between space-x-4">
              <div className="font-bold">U 2 Can Cue, LLC</div>
              <a className="py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300" href="#">Order Online</a>
            </div>
            <div className="flex items-center space-x-5 justify-between">
              <a className=" hover:text-gray-400" href="#">Home</a>
              <a className=" hover:text-gray-400" href="#">About Us</a>
              <a className=" hover:text-gray-400" href="#">Menus</a>
              <a className=" hover:text-gray-400" href="#">Gift Certificates</a>
              <a className=" hover:text-gray-400" href="#">Services</a>
              <a className=" hover:text-gray-400" href="#">Rate Us</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar