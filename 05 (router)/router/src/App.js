import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Error from './components/Error'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* 
        for default routes we use "*" 
        */}
        <Route path='*' element={<Error/>} />  
      </Routes>
    </>
  )
}

export default App