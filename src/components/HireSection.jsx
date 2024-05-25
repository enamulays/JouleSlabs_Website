import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../style/Hire.css'

function HireSection() {
  return (
    <div>
      <div className='hire'>
        <div className='hire-wrapper'>
          <div className='hire-wrapper-in'>
            <img src='./image/clienticon2.webp' alt='clienticon2.svg' className='client-img2'></img>
            <h2>From the day one they have been very cooperative, and they have treated my project as their own. I would definitely recommend JoulesLabs to other business owners who want to excel with their digital product.</h2>
            <div className='hire-ceo'>
              <div className='client-left-bt-in'>
                <img src='./image/clientpic3.webp' alt='clientpic3.webp'></img>
                <div className='client-client'>
                  <h2 className='client-user'>Abdullah Jayed</h2>
                  <h3 className='client-bio'>Founder/CEO of FundedNext & NEXT Ventures</h3>
                </div>
              </div>
            </div>
            <h1>Hire Your Best Tech Team</h1>
            <p>We specialize in providing comprehensive full-cycle software development services, leveraging cutting-edge technologies to ensure optimal results throughout every phase of the development lifecycle.</p>
            <div className='service-button hire-button'>
              <a href='https://www.google.com/'><button className='lets-button'>Let's Talk</button></a>
              <a href='https://www.google.com/'><button className='whatsapp-button'><FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' /> WhatsApp</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HireSection
