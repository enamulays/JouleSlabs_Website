import React from 'react'
import '../style/Contact.css'

function ContactSection() {
  return (
    <div>
      <section className='contact'>
        <div className="contact-wrapper">
          <div className="contact-inner">
            <div className="contact-left">
              <a className="contact-left-img" href='https://www.google.com/'>
                <img src="../image/contact0.svg" alt="contact0" />
              </a>
              <p>{contactLeft}</p>
            </div>

            {/* Contact Section Right Side */}
            <div className="contact-right">
              <div className="contact-right1">
                <h2>COMPANY</h2>
                <a href="https://www.google.com/">About Us</a>
                <a href="https://www.google.com/">Contact Us</a>
              </div>
              <div className="contact-right2">
                <h2>CONTACT</h2>
                <a href="https://www.google.com/">hello@jouleslabs.com</a>
                <h2>Social Media</h2>
                <div className="contact-right2-img">
                  <a href="https://www.google.com/"><img src="../image/contact1.webp" alt="contact1"/></a>
                  <a href="https://www.google.com/"><img src="../image/contact2.webp" alt="contact2"/></a>
                  <a href="https://www.google.com/"><img src="../image/contact3.webp" alt="contact3"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection


const contactLeft = 'JoulesLabs is a software development company. We craft things by completely understanding the business needs and build products that people love. Over the last few years, we’ve helped many small and large businesses take their ideas into applications.'