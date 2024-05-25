import React from 'react'
import '../style/Digital.css'

function DigitalSection() {
  return (
    <div>
      <div className='digital'>
        <div className='digital-wrapper'>
          <div className='digital-in'>
            {/* Digital Section Left Side */}
            <div className='digital-left'>
              <div className='digital-left-content'>
                <h1>Work With The Fastest-Growing Digital Consultancies</h1>
                <p>Partner with one of the fastest-growing digital consultancies for expert guidance and innovative solutions tailored to your business needs.</p>
                <a href="https://www.google.com/">
                  <h3>Learn More About Us</h3>
                  <img src='./image/servicesicon.svg' alt='servicesicon' />
                </a>
              </div>
              <div className='digital-left-img'>
                <img src='../image/digital1.webp' alt='digital1.webp' ></img>
              </div>
            </div>

            {/* Digital Section Right Side */}
            <div className='digital-right'>
              <div className='digital-right-img'>
                <div className='digital-r-img'>
                  <img src='../image/digital2.webp' alt='digital2.webp' className=' digital-right-img1'></img>
                  <img src='../image/digital4.svg' alt='digital2.webp' className='digital-right-img2'></img>
                </div>
                <img src='../image/digital3.webp' alt='digital2.webp' className='digital-right-img3'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalSection
