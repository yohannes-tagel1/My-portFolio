import React from 'react'
import myimage from '../assets/myimage.png';
import profile from '../assets/fronttimagee.png';
import { Link } from 'react-router-dom';
// import profile from '../assets/inn.png';



function Home() {
  return (
    <div className="md:flex mx-auto md:h-screen ">

         <div className=" w-full flex pt-4  flex-col md:flex items-center md:mx-auto md:flex-row justify-center md:p-0">
        {/* <div className=" aspect-auto md:w-1/2 "> */}
        <div className=" aspect-auto md:w-2/3 max-w-xl">

        <div className="px-4  mt-2 pb-2">
            <h1 className="text-6xl font-semibold leading-normal">Hello , I'M</h1>
            <h1 className="text-3xl">Yohannes Tagel</h1>
            {/* <h2 className='text-xl'>And I’m a <span className="textdiscription text-blue-900 text-2xl">Front-End and Backend Developer.</span></h2> */}
            <h2 className='text-xl'>And I’m a <span className="textone text-blue-900 md:text-3xl"><h3>Front-End and Backend Developer.</h3></span></h2>
              <p className="text-xl">Hi I;m Yohannes Tagel a passionate front-end developer specializing in HTM,CSS,JAVASCRIPT and interactive web experiences using REACT and TAILWIND CSS In addition, I worked on the backend by using EXPRESS </p>
          </div>
          <div className="p-4 py-6 ">
          <Link to ="/contact" className="relative px-6 py-3 border-2 border-emerald-500 text-emerald-500 font-semibold group overflow-hidden
             hover:transition-colors duration-400s bg-gray-500 hover:bg-green-500 rounded-lg cursor-pointer">

       Contact me
          </Link>
          </div>
        </div>

          <div className="pic aspect-1/1 md:w-1/3  mb-10  flex items-center justify-center h-2/3 p-5 ">
          <div class=" aspect-auto w-full rounded-full shadow-2xl ring-4 shadow-white border-white brightness-50 overflow-hidden ab -inset-3 bg-gray-400 blur">
          <img src={profile} alt="My photo" className="w-full h-full object-cover" />
          {/* <img src={profile} alt="My photo" className="w-1/1 p-5 border-2 border-r-10" /> */}


          
          </div>
         </div>
       
         </div>
    
    </div>
  )
}

export default Home
