import React from 'react'
import './Port.css'
import IMG1 from '../asstes/portfolio1.jpg'
import IMG2 from '../asstes/portfolio2.jpg'
import IMG3 from '../asstes/portfolio3.jpg'
import IMG4 from '../asstes/portfolio4.jpg'
import IMG5 from '../asstes/portfolio6.jpg'



function Port() {
  return (
    <section id='port'>
      <h5>My recent Work</h5>
      <h2>Portfilio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3> Partha redux</h3>
         <div className='portfolio_item-cta'> 
         <a href="https://github.com/nikhil07back" className='btn'>Github</a>
          <a href="https://resplendent-halva-e94192.netlify.app" className='btn btn-primary' target="_blank">Live demo</a>
          </div>
        
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Weather app Javascript.</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/nikhil07back" className='btn'>Github</a>
          <a href="https://gentle-kheer-dbb3a1.netlify.app/" className='btn btn-primary' target="_blank">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>TODO list React.js</h3>
          <div className='portfolio_item-cta'> 
          <a href="https://github.com/nikhil07back" className='btn'>Github</a>
          <a href="https://willowy-empanada-a66e1d.netlify.app" className='btn btn-primary' target="_blank">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3> expense-manager</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/nikhil07back" className='btn'>Github</a>
          <a href="https://eloquent-biscuit-a0eed6.netlify.app" className='btn btn-primary' target="_blank">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3> Ecommerce Website</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/nikhil07back" className='btn'>Github</a>
          <a href="https://comfy-seahorse-24208c.netlify.app" className='btn btn-primary' target="_blank">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>HTML and CSS desgin TEN</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/nikhil07back" className='btn'>Github</a>
          <a href="https://app.netlify.com/teams/nikhil07back/sites" className='btn btn-primary' target="_blank">Live demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Port
