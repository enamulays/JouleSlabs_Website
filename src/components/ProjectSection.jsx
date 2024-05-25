import React, {useState, useEffect, useRef} from 'react'
import '../style/Project.css'


function Project() {

  const reference = useRef()
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const handleMouseDown = () => {
      setIsDragging(true)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleMouseMove = (e) => {
      if (isDragging) {
        reference.current.scrollLeft -= e.movementX
      }
    }

    const carousel = reference.current
    carousel.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isDragging])
  return (
    <div>
      <section className='project'>
        <div className='project-wrapper'>
          {/* Project Top Section */}
          <div className='project-top'>
            <div className='project-text'>
              <h1>Committing To Your Wins In Every Project</h1>
              <p>{projectTextP}</p>
            </div>
            <div className='project-count-wrap'>
              <div className='project-count'>
                <div className='project-count-in'>
                  <div className='project-count-n'>7
                    +</div>
                  <div className='project-count-t'>Years of Services</div>
                </div>
                <div className='project-count-in'>
                  <div className='project-count-n'>20
                    k+</div>
                  <div className='project-count-t'>Clients</div>
                </div>
                <div className='project-count-in'>
                  <div className='project-count-n'>15
                    +</div>
                  <div className='project-count-t'>Projects</div>
                </div>
                <div className='project-count-in'>
                  <div className='project-count-n'>10
                    +</div>
                  <div className='project-count-t'>Awards</div>
                </div>
              </div>
            </div>
          </div>
          {/* Project Bottom Section or slide section*/}
          <div className='project-carousel'>
            <div className='carousel-wrapper'>
              <div className='carousel-inner' ref={reference}>
                <div className='corousel-items'>
                  <div className='cl-item-img'>
                    <img src='./image/project1.jpg' alt='project1.jpg'></img>
                  </div>
                  <div className='cl-item-content'>
                    <h2>uShop</h2>
                    <p>uShop is an easy-to-use, modern, and secure Cloud-based eSignature platform to simplify and automate document workflows for business functions.</p>
                    <a href="https://www.google.com/">
                      <h3>Learn More</h3>
                      <img src='./image/servicesicon.svg' alt='servicesicon' />
                    </a>
                  </div>
                </div>
                <div className='corousel-items'>
                  <div className='cl-item-img'>
                    <img src='./image/project2.jpg' alt='project1.jpg'></img>
                  </div>
                  <div className='cl-item-content'>
                    <h2>FundedNext</h2>
                    <p>FundedNext let's you get instant customer rating and multicriteria reviews to add credibility to your WooCommerce Store and increase conversion rates.</p>
                    <a href="https://www.google.com/">
                      <h3>Learn More</h3>
                      <img src='./image/servicesicon.svg' alt='servicesicon' />
                    </a>
                  </div>
                </div>
                <div className='corousel-items'>
                  <div className='cl-item-img'>
                    <img src='./image/project3.jpg' alt='project1.jpg'></img>
                  </div>
                  <div className='cl-item-content'>
                    <h2>DeedSign</h2>
                    <p>DeedSign  is an easy-to-use, modern, and secure Cloud-based eSignature platform to simplify and automate document workflows for business functions.</p>
                    <a href="https://www.google.com/">
                      <h3>Learn More</h3>
                      <img src='./image/servicesicon.svg' alt='servicesicon' />
                    </a>
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

export default Project


const projectTextP = 'Our seasoned team of professionals ensures rapid project commencement and impeccable execution, culminating in outcomes that surpass expectations. Committed to efficiency, excellence, and client satisfaction, we empower businesses to achieve their objectives with agility and precision.'