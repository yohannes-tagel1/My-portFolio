import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoClose } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoast } from "react-icons/fa";


function Navbar() {
  const [isopen, setIsopen] = useState(true);

  const toggleMenu=(e)=>{
    // e.prevalent(e) 
    setIsopen(!isopen)
   
  }
  
  return (
    <div className="relative flex items-center justify-between px-10 py-5 bg-gray-700 flex-row">



        <div className='flex gap-2'>
        <FaYoast  className="text-2xl text-green-400 cursor: pointer"/>
        <h2 className="text-xl text-red-200 cursor: pointer"> 
        ꌩꂦꃅꍏꈤꈤꍟꌗ
        </h2>
        </div>

              <ul className="hidden md:flex">
                    <li><a href="#home" className="px-10 py-2 hover:underline hover:text-black hover:border-r-12 ">Home</a></li>
                    <li><a href="#about" className="px-10 py-2 hover:underline hover:text-black hover:border-r-12 ">About</a></li>
                    <li><a href="#Reviwes" className="px-10 py-2 hover:underline hover:text-black hover:border-r-12 ">Reviews</a></li>
                    <li><a href="#contact" className="px-10 py-2 hover:underline hover:text-black hover:border-r-12 ">Contact</a></li>
              </ul>

      
        <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isopen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-10`}
      >
      
        <ul className="flex flex-col p-4 space-y-4  mt-16 ">
          <li><a href="#home" className="text-gray-800 py-2 px-10 hover:bg-blue-600  " onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" className="text-gray-800 py-2 px-10 hover:bg-blue-600" onClick={toggleMenu}>About</a></li>
          <li><a href="#reviews" className="text-gray-800 py-2 px-10 hover:bg-blue-600" onClick={toggleMenu}>Reviews</a></li>

          <li><a href="#contact" className="text-gray-800 py-2 px-10 hover:bg-blue-500" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>

      {isopen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-0"
          onClick={toggleMenu}
        ></div>
      )}

 <button
        className="text-xl cursor-pointer md:hidden z-20"
        onClick={toggleMenu}
        aria-expanded={isopen}
        aria-label="Toggle menu"
      >
        { isopen ? 
          <IoClose className="text-black" /> : <RxHamburgerMenu className="text-white" />
        }
      </button>
      
    </div>
  )
}

export default Navbar
