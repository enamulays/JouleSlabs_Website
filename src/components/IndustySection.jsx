import React from 'react'
import '../style/Industy.css'
import IndustyChield from './IndustyChield'

function IndustySection() {
  return (
    <div>
      <section className='industy'>
        <div className='industy-wrapper'>
          <div className='industy-inner'>
            <div className='industy-top'>
              <img src="../image/industy0.svg" alt="industy0.svg" />
              <h1>We excel in these industries.</h1>
            </div>
            <IndustyChield />
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndustySection

