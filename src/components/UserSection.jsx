import React from 'react'
import style from '../style/style.module.css';
import DashboardInput from './DashboardInput';
import '../style/User.css'

function UserSection({ nav }) {
  return (
    <div
    className={`${style.dashright} ${nav?'dash-media': 'dash-none'}`}
    >
      <DashboardInput />
      <div className="user">
        <div className="user-left">
          <div className="user-head">
            <h2>Edit Profile</h2>
            <h3>Complete your profile</h3>
          </div>
          <div className="user-form">
            <form action="#">
              <div className="user-left-t">
                <div className="user-input">
                  <label htmlFor="">Company :</label>
                  <input type="text" placeholder='Company Name' /></div>
                <div className="user-input">
                  <label htmlFor="">User Name :</label>
                  <input type="text" placeholder='User name' /></div>
                <div className="user-input">
                  <label htmlFor="">Email Adress :</label>
                  <input type="email" placeholder='Email Address' /></div>
              </div>
              <div className="user-left-m">
                <div className="user-input">
                  <label htmlFor="">First Name :</label>
                  <input type="text" placeholder='First Name' /></div>
                <div className="user-input">
                  <label htmlFor="">Last Name :</label>
                  <input type="email" placeholder='Last Name' /></div>
              </div>
              <div className="user-left-b">
                <div className="user-input">
                  <label htmlFor="">City :</label>
                  <input type="text" placeholder='City' /></div>
                <div className="user-input">
                  <label htmlFor="">Country :</label>
                  <input type="text" placeholder='Country' /></div>
                <div className="user-input">
                  <label htmlFor="">Postal Code :</label>
                  <input type="email" placeholder='Postal Code' /></div>
              </div>
              <button>Update Profile</button>
            </form>
          </div>
        </div>
        <div className="user-right">
          <div className="user-right-img">
            <img src="../image/illustration-john-light-0061869a.png" alt="Computer man" />
          </div>
          <div className="user-right-text">
            <h3>CEO / CO-FOUNDER</h3>
            <h2>Alec Thompson</h2>
            <p>Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSection
