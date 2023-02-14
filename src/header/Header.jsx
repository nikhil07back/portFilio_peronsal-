import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../asstes/what.jpg'
import HeaderScroll from './HeaderScroll'


function Header() {
  return (
  
    <header>
      <div className="container header_container">
        <h5>HELLO I'm </h5>
        <h1>NIKHIL NAGLE</h1>
        <h5 className='text-light'>Mern Stack developer </h5>
        <CTA/>

        <HeaderScroll/>  

        <div className="me">
          <img className='imi' src={ME} alt="me"/>
        </div>

        <a href="#content" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
