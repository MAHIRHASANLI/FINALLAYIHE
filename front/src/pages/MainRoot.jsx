import React from 'react'
import Navbar from '../companent/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../companent/Footer'
import Header from '../companent/Header'

const MainRoot = () => {
  return (
   <>
   <Header/>
<Navbar/>
<Outlet/> 
<Footer/>  
</>
  )
}

export default MainRoot