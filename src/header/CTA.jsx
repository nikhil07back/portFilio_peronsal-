import React from 'react'
import NI from '../../src/asstes/NI.pdf'
function CTA() {


  return (
    <div className='cta'>
      <a href={NI}download className='btn'> DownLoad CV </a>
      <a href="#content" className=' btn btn-primary'>Let's Talk</a>

        
    </div>
  )
}

export default CTA
