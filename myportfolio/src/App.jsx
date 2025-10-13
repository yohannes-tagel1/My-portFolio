import React from 'react'
import Navbar from './Componet/Navbar'
import Home from './Page/Home'
import About from './Page/About'
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>

     </Routes>
      {/* <Home/> */}

      
      <About/>
     
    </div>
  )
}

export default App
