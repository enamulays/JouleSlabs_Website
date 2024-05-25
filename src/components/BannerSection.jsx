import React from 'react'
import '../style/Banner.css'
import Navbar from './Navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function BannerSection() {
  return (
    <div>
      <div className='banner'>
        <div className='banner-inner'>
          <Navbar />
          <div className='banner-wrapper'>
            <div className='banner-wrapper-inner'>
              <div className='banner-left'>
                <h1>We Are Full-Cycle Development Agency</h1>
                <h2>With our dedicated team by your side, rest assured that your goals become our mission, driving every decision and action towards delivering outstanding results.</h2>
                <div className='service-button'>
                  <a href='https://www.google.com/'><button className='lets-button'>Let's Talk</button></a>
                  <a href='https://www.google.com/'><button className='whatsapp-button'><FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' /> WhatsApp</button></a>
                </div>
              </div>


              <div className='banner-right'>
                <div className='banner-right-image'>
                  <img src='./image/bannerpeople.webp' alt='people'></img>
                </div>
              </div>
            </div>
            <div className='banner-right-small'>
              <img src='./image/banners1.webp' alt='small' style={{
                gridArea: "3/1/4/2",
                transform: 'translate(0px, -20px)'
              }}></img>
              <img src='./image/banners2.webp' alt='small' style={{ gridArea: "3/2/4/3", transform: 'translate(0px, 20px)' }}></img>
              <img src='./image/banners3.webp' alt='small' style={{ gridArea: "2/3/3/4", transform: 'translate(0px, -25px)' }}></img>
              <img src='./image/banners4.webp' alt='small' style={{ gridArea: "3/3/4/4", transform: 'translate(0px, -25px)' }}></img>
              <img src='./image/banners5.webp' alt='small' style={{ gridArea: "4/3/5/4", transform: 'translate(0px, -25px)' }}></img>
              <img src='./image/banners6.webp' alt='small' style={{ gridArea: "3/4/4/5" }}></img>
              <img src='./image/banners7.webp' alt='small' style={{ gridArea: "2/4/3/5" }}></img>
              <img src='./image/banners8.webp' alt='small' style={{ gridArea: "1/4/2/5" }}></img>
            </div>
            <div className='banner-color1'></div>
            <div className='banner-color2'></div>
            <div className='banner-color3'></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BannerSection
