import React from 'react'
import '../style/Messege.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../style/Hire.css'

function MessegeSection() {
  return (
    <div>
      <section className='messege'>
        <div className="messege-wrapper">
          <div className="messege-inner">
            <h1>Have a Project? <img src="../image/messsege1.webp" alt="" /></h1>
            <div className="messege-a1">
              <a href="https://www.google.com/">Schedule a call or send us a message</a>
            </div>
            <p>{messegeP}</p>
            <div className='service-button hire-button'>
              <a href='https://www.google.com/'><button className='lets-button'>Let's Talk</button></a>
              <a href='https://www.google.com/'><button className='whatsapp-button'><FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' /> WhatsApp</button></a>
            </div>
            <div className="messege-image">
              <img src="../image/messsege2.svg" alt="messsege2" />
              <img src="../image/messsege3.svg" alt="messsege2" />
              <img src="../image/messsege4.svg" alt="messsege2" />
              <img src="../image/messsege5.svg" alt="messsege2" />
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default MessegeSection



const messegeP = "Ready to transform your vision into reality? Let us bring your project to life with our expert team and cutting-edge technology solutions. Whether you're launching a new venture or upgrading an existing project, we're here to provide innovative and tailored software services to meet your needs. Get in touch today to kickstart your project journey with us!"