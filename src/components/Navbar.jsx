import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [navtoggler, setNavtoggler] = useState(true)


  return (
    <div>
      <section className='section'>
        <section className='header'>
          <nav className='nav'>
            <div className='nav-inner'>
              <div className='nav-inner-image'>
                <img src='image/navlogo.svg' alt='Joulslabs.logo'></img>
              </div>
              <div className={`nav-inner-list${navtoggler?' navtoggler': ''}`}>
                <ul>
                  <li><Link to='/' className='link'>Home</Link></li>
                  <li><Link to='/' className='link'>Services</Link></li>
                  <li><Link to='/' className='link'>Case St</Link></li>
                  <li><Link to='/' className='link'>Industries</Link></li>
                  <li><Link to='/' className='link'>About Us</Link></li>
                  <li><Link to='/' className='link'>Contact us</Link></li>
                </ul>
              </div>
              <div className={`nav-inner-button${navtoggler? ' navtoggler':''}`}>
                <button>Let's Talk</button>
              </div>
              <div className='navtigation-button'>
                <button onClick={()=>setNavtoggler(!navtoggler)}>{navtoggler? <FontAwesomeIcon icon={faBars}/>:<FontAwesomeIcon icon={faXmark} />} </button>
              </div>
            </div>
          </nav>
        </section>
      </section>
    </div>
  )
}

export default Navbar
