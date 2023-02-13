import React from 'react'
import './Footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'


function Footer() {
  return (
    <footer>

      <a href="#" className='footer_logo' >NIKHIL NAGLE</a>
      <ul className='linksto'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#export">eperirences</a></li>
        <li><a href="#service">services</a></li>
        <li><a href="#portfolio">portfilio</a></li>
        <li><a href="#content">contact</a></li>

      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com" target="_blank"><AiFillInstagram/></a>
        <a href="https://www.twitter.com"  target="_blank"><AiOutlineTwitter/></a>
        <a href="https://telegram.org"  target="_blank"><FaTelegramPlane/></a>
      </div>


<div className="footer_copyright">
  <small> NiCk. All rights reserve </small>
</div>
    </footer>
  )
}

export default Footer