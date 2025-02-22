import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'

const maintanence = '/Maintanence.gif'
function App() {
  return (
    <>
    {/* <NavigationBar /> */}
      {/* <center><img src={maintanence} alt="maintanence" /></center>
      <h1>This Site is Under Maintenance</h1> */}
      <Home />
      {/* <HeroSection /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
