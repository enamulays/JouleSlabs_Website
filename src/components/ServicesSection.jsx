import React from 'react'
import '../style/Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function ServicesSection() {
  return (
    <div>
      <section className='service-wrapper'>
        <div className='service-container'>
          <div className='service-top'>
            <h1 className='service-t-l header1'>Services</h1>
            <div className='service-t-r'>{serviceTopLeft}</div>
          </div>

          {/** Service Section Mid Portion**/}
          <div className='service-mid Service-mid-bottom'>
            <div className='service-m-l service-box'>
              <div className='service-small'>SAAS</div>
              <h2>Application Development</h2>
              <p>{serviceMidLeftP}</p>
              <a href="https://www.google.com/">
                <h3>Learn More</h3>
                <img src='./image/servicesicon.svg' alt='servicesicon' />
              </a>
            </div>
            <div className='service-m-m service-box'>
              <h2>Mobile App Development</h2>
              <p>{serviceMidMidtP}</p>
              <a href="https://www.google.com/">
                <h3>Learn More</h3>
                <img src='./image/servicesicon.svg' alt='servicesicon' />
              </a>
            </div>
            <div className='service-m-r service-box'>
              <h2>Software Development</h2>
              <p>{serViceMidMidP}</p>
              <a href="https://www.google.com/">
                <h3>Learn More</h3>
                <img src='./image/servicesicon.svg' alt='servicesicon' />
              </a>
            </div>
          </div>
          {/** Service Section Bottom Portion**/}
          <div className='service-bottom Service-mid-bottom'>
            <div className='service-b-l service-box'>
              <h2>UX UI Design</h2>
              <p>{serviceBotLP}</p>
              <a href="https://www.google.com/">
                <h3>Learn More</h3>
                <img src='./image/servicesicon.svg' alt='servicesicon' />
              </a>
            </div>
            <div className='service-b-m service-box'>
              <h2>Business Analysis</h2>
              <p>{serviceBotMP}</p>
              <a href="https://www.google.com/">
                <h3>Learn More</h3>
                <img src='./image/servicesicon.svg' alt='servicesicon' />
              </a>
            </div>

            <div className='service-b-r'>
              <div className=' service-box'>
                <h2>DevOps Services</h2>
                <p>{serviceBotRP}</p>
                <a href="https://www.google.com/">
                  <h3>Learn More</h3>
                  <img src='./image/servicesicon.svg' alt='servicesicon' />
                </a>
              </div>
              <div className='service-button'>
                <a href='https://www.google.com/'><button className='lets-button'>Let's Talk</button></a>
                <a href='https://www.google.com/'><button className='whatsapp-button'><FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' /> WhatsApp</button></a>
              </div>
            </div>
          </div>

          {/** Service Section Responsive max-width: 991px **/}
          <div className='service-responsive'>
            < div className='service-m-l service-box' >
              <div className='service-small'>SAAS</div>
              <h2>Application Development</h2>
              <p>{serviceMidLeftP}</p>
              <a href="https://www.google.com/">
                <h3>Learn More</h3>
                <img src='./image/servicesicon.svg' alt='servicesicon' />
              </a>
            </div >
            <div className='service-m-m service-box'>
              <h2>Mobile App Development</h2>
              <p>{serviceMidMidtP}</p>
              <a href="https://www.google.com/">
                <h3>Learn More</h3>
                <img src='./image/servicesicon.svg' alt='servicesicon' />
              </a>
            </div>
            <div className='service-m-r service-box'>
              <h2>Software Development</h2>
              <p>{serViceMidMidP}</p>
              <a href="https://www.google.com/">
                <h3>Learn More</h3>
                <img src='./image/servicesicon.svg' alt='servicesicon' />
              </a>
            </div>
            <div className='service-b-l service-box'>
              <h2>UX UI Design</h2>
              <p>{serviceBotLP}</p>
              <a href="https://www.google.com/">
                <h3>Learn More</h3>
                <img src='./image/servicesicon.svg' alt='servicesicon' />
              </a>
            </div>
            <div className='service-b-m service-box'>
              <h2>Business Analysis</h2>
              <p>{serviceBotMP}</p>
              <a href="https://www.google.com/">
                <h3>Learn More</h3>
                <img src='./image/servicesicon.svg' alt='servicesicon' />
              </a>
            </div>

            <div className='service-b-r'>
              <div className=' service-box'>
                <h2>DevOps Services</h2>
                <p>{serviceBotRP}</p>
                <a href="https://www.google.com/">
                  <h3>Learn More</h3>
                  <img src='./image/servicesicon.svg' alt='servicesicon' />
                </a>
              </div>
              <div className='service-button'>
                <a href='https://www.google.com/'><button className='lets-button'>Let's Talk</button></a>
                <a href='https://www.google.com/'><button className='whatsapp-button'><FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' /> WhatsApp</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesSection




const serviceTopLeft = 'We enable companies to swiftly create customized digital products with our digital acceleration tools, resources, and expertise, regardless of size.'

const serviceMidLeftP = 'With our extensive experience in SaaS development, we offer a specialized MVP (Minimum Viable Product) development service designed to meticulously validate your ideas and ensure their viability in the market.'

const serviceMidMidtP = "We specialize in the development of mobile applications that prioritize exceptional performance and deliver outstanding user experiences and industry best practices to ensure unparalleled quality and customer satisfaction."

const serViceMidMidP = 'We specialize in providing comprehensive full-cycle software development services, leveraging cutting-edge technologies to ensure optimal results throughout every phase of the development lifecycle.'

const serviceBotLP = "With a wealth of experience in professional UX/UI design, we  meticulously craft modern applications that prioritize user experience and interface aesthetics, ensuring optimal functionality and user engagement throughout the development process."

const serviceBotMP = 'By leveraging thorough analysis and drawing upon extensive years of industry experience, we specialize in effectively bridging the gap between Information Technology and business operations, ensuring seamless alignment and synergy between the two domains.'

const serviceBotRP = 'Our DevOps service enhances software development by promoting collaboration, automation, and efficient delivery, ensuring faster, reliable releases aligned with business objectives.'
