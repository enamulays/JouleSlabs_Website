import React from 'react'
import '../style/Brands.css'

function BrandsSection() {
  return (
    <div>
      <section className='brand'>
        <div className="brand-wrapper">
          <div className="brand-in">
            <div className="brand-top">
              <div className="brand-left">
                <h2>Brands</h2>
                <div className="brand-image">
                  <div className="brand-image1">
                    <a href="https://www.google.com/"><img src="../image/brand1.svg" alt="contacbrand1" /></a>
                    <a href="https://www.google.com/"><img src="../image/brand2.svg" alt="contacbrand2" /></a>
                    <a href="https://www.google.com/"><img src="../image/brand3.svg" alt="contacbrand3" /></a>
                  </div>
                </div>
              </div>
              <div className="brand-right">
                <h2>Vendors & Platforms</h2>
                <div className="brand-image">
                  <div className="brand-image2">
                    <a href="https://www.google.com/"><img src="../image/brand4.svg" alt="contacbrand4" /></a>
                    <a href="https://www.google.com/"><img src="../image/brand5.svg" alt="contacbrand5" /></a>
                    <a href="https://www.google.com/"><img src="../image/brand6.svg" alt="contacbrand6" /></a>
                    <a href="https://www.google.com/"><img src="../image/brand7.svg" alt="contacbrand7" /></a>
                    <a href="https://www.google.com/"><img src="../image/brand8.png" alt="contacbrand8" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/*Brand Bottom Section*/}
            <div className="brand-bottom">
              <div className="brand-credit">
                <div className='credit-text'>© 2024 JoulesLabs. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BrandsSection
