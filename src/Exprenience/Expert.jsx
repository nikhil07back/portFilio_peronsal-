import React from 'react'
import './Expert.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Expert() {
  return (

    <section id='expert ' className='expert_ko'>


      <h5> What Skill I Have </h5>
      <h2>My SKILLS </h2>

      <div className="container experience_container">

        <div className="experience_frontend">
          <h3>Front end</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/> 
            <div>
            <h4>HTML</h4>
              <small className='text-light'>Advanced</small>

            </div>

            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/> 
             <div>
             <h4>CSS</h4>
              <small className='text-light'>Advanced</small>


             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/> 
             <div>
             <h4>JAVASCRIPT</h4>
              <small className='text-light'>intermediate</small>
             </div>

            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/> 
             <div>
             <h4>REACT JS</h4>
              <small className='text-light'>intermediate</small>
              </div>


            </article>
            <article className='experience_details'>
              <BsPatchCheckFill  className='experience_details-icon'/> 
            <div>
            <h4>REDUX</h4>
              <small className='text-light'>intermediate</small>

            </div>

            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/> 
             <div>

             <h4>GIT</h4>
              <small className='text-light'>intermediate</small>

             </div>

            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>BackEnd Developer</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/> 
            <div>
            <h4> NODE.js </h4>
              <small className='text-light'>intermediate</small>

            </div>

            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/> 
           <div>
           <h4>EXPRESS.JS</h4>
              <small className='text-light'>Advanced</small>

           </div>

            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/> 
           <div>
           <h4>MONGODB</h4>
              <small className='text-light'>intermediate</small>
           </div>
            </article>
          
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/> 
           <div>
           <h4>GITHUB</h4>
              <small className='text-light'>intermediate</small>
           </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/> 
           <div>
           <h4>DBMS</h4>
              <small className='text-light'>intermediate</small>
           </div>
              </article>
              
          </div>
        </div>
      </div>
              
 
    </section>
  )
}

export default Expert