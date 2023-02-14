import React from 'react'
import './Services.css'
import { BsCheckCircleFill } from 'react-icons/bs'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offers</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI Desgin</h3>
          </div>
          <ul className='service_list'>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p>First i create a profile for HTML and CSS </p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p> The Range Rover launched in 1970 by British Leyland  website clone. </p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p>Microsoft website clone i made by HTML and CSS ..</p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p> Start UP  website clone most famous outcomes .</p>
            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p>Netflix clone website for more advance level i boosted myself.</p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p>then i create a Dashboard for the frameWorks desgin most unique.</p>

            </li>

          </ul>
        </article>



        <article className='service'>
          <div className="service_head">
            <h3>Front End Developer</h3>
          </div>

          <ul className='service_list'>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p> first i create a TODO list for Javascript.</p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p> Weather Application in a random image and all over world</p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p>Calculator simple pro.</p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p> Dice game Javascript help .  </p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p> blackjack game one of the famous and intersed game ever .  </p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p> Drum Kit game also in a inclued a list this fun task for me . </p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p>So many projects i am doing right know so please hold your hearts  </p>

            </li>

          </ul>
        </article>

        {/*web developer full filled  */}


        <article className='service server_new'>
          <div className="service_head">
            <h3>Context Creaction</h3>
          </div>

          <ul className='service_list'>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p>In the digital age, writers face new problems in addition to the usual ones.</p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p>As publications continue to change, content editors are forced to change their way of counting things and making room for themselves.</p>
            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p> It has no other objective than to teach what you do. It is about grouping all your masterpieces to show them to the world.</p>

            </li>
            <li> <BsCheckCircleFill className='service_list-icon' />
              <p>The front-end of a website is the part that users interact with.</p>
            </li>
          </ul>
        </article>





      </div>
    </section>
  )
}

export default Services
