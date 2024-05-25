import React from 'react'
import '../style/Client.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function ClientSection() {
  return (
    <div>
      <section className='client'>
        <div className='client-inner'>
          <div className='client-wrapper'>
            <div className='client-top'>
              < h2 className='header1'>Hear from Our Clients</h2>
            </div>

            <div className='client-mid'>
              <div className='client-left'>
                <div className='client-left-icon'>
                  <img src='./image/clienticon1.svg' alt='clienticon1.svg' className='client-img1'></img>
                  <img src='./image/clienticon2.webp' alt='clienticon2.svg' className='client-img2'></img>
                </div>
                <div className='client-left-mid'>
                  From the day one they have been very cooperative, and they have treated my project as their own. I would definitely recommend JoulesLabs to other business owners who want to excel with their digital product.
                </div>
                <div className='client-left-bt'>
                  <div className='client-left-bt-in'>
                    <img src='./image/clientpic3.webp' alt='clientpic3.webp'></img>
                    <div className='client-client'>
                      <h2 className='client-user'>Abdullah Jayed</h2>
                      <h3 className='client-bio'>Founder/CEO of FundedNext & NEXT Ventures</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className='client-right'>
                <img src='./image/clientpic4.webp' alt='clientpic4'></img>
                <button className='client-button'><FontAwesomeIcon icon={faPlay} /></button>
              </div>
            </div>

            <div className='client-bottom'>
              <div className='client-bottom-in'>
                <div className='client-text'>
                  <div className='client-text-box'>Clients</div>
                </div>
                <div className='client-logos'>
                  <div className='client-logo'>
                    <div className='client-logo-animate'>
                      <img src='./image/clienticon1.svg' alt='clienticon1.svg'></img>
                      <img src='./image/clientlogo2.svg' alt='clienticon2.svg'></img>
                      <img src='./image/clientlogo3.svg' alt='clienticon3.svg'></img>
                      <img src='./image/clientlogo4.svg' alt='clienticon4.svg'></img>
                      <img src='./image/clientlogo5.svg' alt='clienticon5.svg'></img>
                    </div>
                    <div className='client-logo-animate'>
                      <img src='./image/clienticon1.svg' alt='clienticon1.svg'></img>
                      <img src='./image/clientlogo2.svg' alt='clienticon2.svg'></img>
                      <img src='./image/clientlogo3.svg' alt='clienticon3.svg'></img>
                      <img src='./image/clientlogo4.svg' alt='clienticon4.svg'></img>
                      <img src='./image/clientlogo5.svg' alt='clienticon5.svg'></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ClientSection
