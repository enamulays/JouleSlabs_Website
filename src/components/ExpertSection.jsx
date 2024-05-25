import React from 'react'
import '../style/Expert.css'

function ExpertSection() {
  return (
    <div>
      <section className='expert'>
        <div className='expert-wrapper'>
          <div className="expert-inner">
            {/* Expert Secition Left Side */}
            <div className="expert-left">
              <h1>We Are Experts In Robust Technologies</h1>
              <p>{expertLeftP}</p>
            </div>

            {/* Expert Secition Right Side */}
            <div className="expert-right">
              <div className="expert-right-img">
                <img src="../image/expert1.svg" alt="expert" style={{gridArea:'1/2/2/3', transform:'translate(-40px, -40px)'}} className='etype2'/>
                <img src="../image/expert2.webp" alt="expert" style={{gridArea:'1/3/2/4', transform:'translate(-20px, -40px)'}} className='etype1'/>
                <img src="../image/expert3.svg" alt="expert" style={{gridArea:'1/4/2/5', transform:'translate(-20px, -0px)'}} className='etype2'/>
                <img src="../image/expert4.svg" alt="expert" style={{gridArea:'2/1/3/2', transform:'translate(30px, -10px)'}} className='etype2'/>
                <img src="../image/expert5.svg" alt="expert" style={{gridArea:'2/2/3/3', transform:'translate(50px, 10px)'}} className='etype2'/>
                <img src="../image/expert6.svg" alt="expert" style={{gridArea:'2/3/3/4', transform:'translate(55px, 10px)'}} className='etype1'/>
                <img src="../image/expert7.svg" alt="expert" style={{gridArea:'2/4/3/5', transform:'translate(40px, 10px)'}} className='etype2'/>
                <img src="../image/expert8.svg" alt="expert" style={{gridArea:'3/1/4/2', transform:'translate(-10px, 25px)'}} className='etype1'/>
                <img src="../image/expert9.svg" alt="expert" style={{gridArea:'3/2/4/3', transform:'translate(-5px, 50px)'}} className='etype2'/>
                <img src="../image/expert10.svg" alt="expert" style={{gridArea:'3/3/4/4', transform:'translate(10px, 35px)'}} className='etype2'/>
                <img src="../image/expert11.svg" alt="expert" style={{gridArea:'3/4/4/5', transform:'translate(15px, 10px)'}} className='etype2'/>
                <img src="../image/expert12.svg" alt="expert" style={{gridArea:'4/3/5/4', transform:'translate(-30px, 50px)'}} className='etype1'/>
                <img src="../image/expert13.svg" alt="expert"style={{gridArea:'4/4/5/5', transform:'translate(-40px, 15px)'}} className='etype2'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExpertSection



const expertLeftP='Discover unparalleled expertise in cutting-edge technologies with our software services. Our team specializes in developing robust solutions tailored to your unique needs, ensuring optimal performance and innovation every step of the way.'