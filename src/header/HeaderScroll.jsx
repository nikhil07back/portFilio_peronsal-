import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'



function HeaderScroll() {
  return (
    <div className='header_socials'>
        <a href="https://github.com/nikhil07back" target="_blank"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/nikhil-kumar-nagle-682a4522a/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://www.instagram.com/?hl=en" target="_blank"><AiFillInstagram/> </a>
       
        
        <div>
        <iframe className='videos' src="https://www.youtube.com/embed/CxNFuBZ_jRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      
    </div>

    
  )
}

export default HeaderScroll
