import React from 'react'
import logo from './../assets/investment-calculator-logo.png';
const Header = () => {
  return (
   <header id='header'>
    <img src={logo} id='header-img' alt="Logo showing a money bag" />
     <h1>Investement Calculator</h1>
   </header>

  
  )
}

export default Header
