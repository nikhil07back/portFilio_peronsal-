import {useState} from 'react'
import './Nav.css'
import { AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUserAdd} from 'react-icons/ai'
import { AiOutlineBook} from 'react-icons/ai'
import { AiOutlineCustomerService} from 'react-icons/ai'
import { AiOutlineContacts} from 'react-icons/ai'

import {BiMessageAltDetail } from 'react-icons/bi'


function Nav() {

  const [activeNav, setActiveNav] = useState('#')



  return (
   
    <nav>
      <a href="#"
       className={ activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('about')}  className={ activeNav === '#about' ? 'active' : ''} ><AiOutlineUserAdd/></a>
      <a href="#port"onClick={() => setActiveNav('port')}  className={ activeNav === '#port' ? 'active' : ''}><AiOutlineBook/></a>
      <a href="#services" onClick={() => setActiveNav('services')}  className={ activeNav === '#services' ? 'active' : ''}><AiOutlineCustomerService/></a>
      <a href="#content" onClick={() => setActiveNav('content')}  className={ activeNav === '#content ' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav
