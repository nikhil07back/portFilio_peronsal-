import React from 'react'
import './Content.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillMessage} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import  { useRef } from 'react';
// import emailjs from 'emailjs-com';




function Content() {


  return (
    <section id='content'> 
    <h5>GET IN TOUCH</h5> 
    <h2>Contact me</h2>

    <div className="container content_container">
      <div className="contact_options">
        <article className='contact_option'>
          <AiOutlineMail className='contact_option-icon'/> 

          <h4>EMAIL</h4>
          <h5>nikhilnagle07@gmail.com</h5>

          <a href="mailto:nikhilnagle07@gmail.com" target="_blank">send me a message</a>


        </article>
        <article className='contact_option'>
          <AiFillMessage  className='contact_option-icon' />

          <h4>message</h4>
          <h5>please send me message to touch </h5>
          <a href="https://twitter.com/messages" target="_blank">send me a message</a>


        </article>
        <article className='contact_option'>
          <AiOutlineWhatsApp className='contact_option-icon'/> 

          <h4>WhatsApp</h4>
          <h5>+918770457809</h5>
          <a href="https://api.whatsapp.com/send/?phone=8770457809&text=Welcome+to+Eskills+World&type=phone_number&app_absent=0" target="_blank"> send me a message</a>
        </article>
      </div>

      <form  name="contact">
        <input type="text" name='name' placeholder='Your full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />

        <textarea><input type="message "placeholder='Your Message' required /></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>

      </form> 

      


    </div>
    </section>
    
  )
}

export default Content