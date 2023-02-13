import React from 'react'
import './About.css'
import {BsAwardFill} from 'react-icons/bs'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import  ME from '../../src/asstes/nick.jpg'


function About() {
  return (
   <section id='about' className='about_side'>
<h5>Get To Know</h5>
<h2>ABOUT ME</h2>

<div className="container about_container">
  <div className="about_me">
    <div className="about_image">
      <img src={ME} alt="About Image"/>

    </div>
  </div>

  <div className="about_content">
    <div className="about_cards">
      <article className='about_card'>
        <BsAwardFill className='about_icon'/> 
        <h5>Fresher</h5>
        <small> 5+ Months of Internship</small>


      </article>
      <article className='about_card'>
        <AiOutlineFundProjectionScreen className='about_icon'/> 

        <h5>Projects</h5>
        <small> +27
        </small>


      </article>



      <article className='about_card'>
        < AiOutlineFolderOpen className='about_icon'/> 

        <h5>logical Questions and Interview Question </h5>
        <small>Prepare</small> 


      </article>
    </div>

  <p>

Proficiency in HTML, CSS, and JavaScript,Experience with frameworks such as React and redux
Knowledge of design principles and user experience (UI) best practices,Familiarity with browser and device compatibility issues,Understanding of SEO and web performance optimization.


  </p>
     <a href="#content" className='btn btn-primary'> Lets Talks</a>
  
  </div>
</div>
   </section>
  )
}

export default About
