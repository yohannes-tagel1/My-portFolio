import React, { useState } from 'react'
import { IoClose } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoast } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import About from '../Page/About';
import Home from '../Page/Home';

function Navbar() {
  const [isopen, setIsopen] = useState(true);

  const toggleMenu=(e)=>{
    // e.prevalent(e) 
    setIsopen(!isopen)
   
  }
  
  return (
    <div className="sticky scroll-mt-20 z-50 top-0 right-0  w-full flex-none flex items-center justify-between px-16 py-5 bg-gray-700 flex-row">



        <div className='flex gap-2 top-0'>
        <FaYoast  className="text-2xl text-green-400 cursor: pointer"/>
        <h2 className="text-xl text-red-200 cursor: pointer"> 
        <Link to ="/">ꌩꂦꃅꍏꈤꈤꍟꌗ</Link>
        
        </h2>
        </div>

              <ul className="hidden md:flex transition-4s">
              
              <Link to ="/"   className="px-5  hover:underline hover:text-black hover:border-r-12" >Home</Link>
              <Link to ="/about"  className="px-5  hover:underline hover:text-black hover:border-r-12">About</Link>
              <Link to ="/skill"  className="px-5  hover:underline hover:text-black hover:border-r-12">Skill</Link>
              <Link to ="/worke"  className="px-5  hover:underline hover:text-black hover:border-r-12">Worke</Link>
              <Link to ="/contact"  className="px-8  hover:underline hover:text-black hover:border-r-12">Contact</Link>

              </ul>
            
        <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-400 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isopen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-10`}
      >
      
        <ul className="flex flex-col p-4 space-y-4  mt-16 text-black ">
          {/* <li><a href="#home" className="text-gray-800 py-2 px-10 hover:bg-blue-600  " onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" className="text-gray-800 py-2 px-10 hover:bg-blue-600" onClick={toggleMenu}>About</a></li>
          <li><a href="#reviews" className="text-gray-800 py-2 px-10 hover:bg-blue-600" onClick={toggleMenu}>Reviews</a></li>
          <li><a href="#contact" className="text-gray-800 py-2 px-10 hover:bg-blue-500" onClick={toggleMenu}>Contact</a></li> */}
            
             <Link to ="/"   className="px-10 py-2  hover:underline hover:text-black hover:border-r-12 hover:bg-blue-600" onClick={toggleMenu} >Home</Link>
              <Link to ="/about"  className="px-10 py-2  hover:underline hover:text-black hover:border-r-12 hover:bg-blue-600" onClick={toggleMenu}>About</Link>
              <Link to ="/skill"  className="px-10 py-2  hover:underline hover:text-black hover:border-r-12 hover:bg-blue-600" onClick={toggleMenu}>Skill</Link>
              <Link to ="/worke"  className="px-10 py-2  hover:underline hover:text-black hover:border-r-12 hover:bg-blue-600" onClick={toggleMenu}>Worke</Link>
              <Link to ="/contact"  className="px-10 py-2  hover:underline hover:text-black hover:border-r-12 hover:bg-blue-600" onClick={toggleMenu}>Contact</Link>

       
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
