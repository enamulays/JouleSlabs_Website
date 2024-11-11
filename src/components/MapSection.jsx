import React from 'react'
import style from '../style/style.module.css';
import DashboardInput from './DashboardInput';
import '../style/Maps.css'
// import GoogleMapComponent from './GoogleMapComponent';

function MapSection({ nav }) {
  return (
    <div
      className={`${style.dashright} ${nav ? 'dash-media' : 'dash-none'}`}
    >
      <DashboardInput />
      <div className="maps">
        <div className="map-text">
          <h1>Find Us on the Map</h1>
          <h2>Discover Our Surroundings</h2>
        </div>
        <div className="map-inner">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d933035.6255413576!2d89.259141!3d24.007413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe85fac8f7d131%3A0xd77c4cc4d339dfbf!2zVGVybWluYWwgQnVzIFN0b3AgKOCmn-CmvuCmsOCmruCmv-CmqOCmvuCmsiDgpqzgpr7gprjgprfgp43gpp_gp43gpq_gpr7gpqjgp43gpqEp!5e0!3m2!1sen!2sbd!4v1717218521226!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Goggle of Pabna Terminal'></iframe>
          {/* <GoogleMapComponent /> */}
        </div>
      </div>
    </div>
  )
}

export default MapSection
