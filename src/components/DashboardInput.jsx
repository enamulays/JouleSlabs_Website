import React, { useState } from 'react'
import style from '../style/style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../style/Dashboard.css'


function DashboardInput({ nav }) {

  const [onChange, setOnChange] = useState()

  return (
    <>
      <div className={style.inputSection}>
        <div className={style.inputSearch}>
          <div className={style.inputinner}>
            <input type="text" placeholder='Search' value={onChange} onChange={(e) => setOnChange(e.target.value)} className={style.input} onFocus={(e) => e.target.classList.add(style.inputfocus)} onBlur={(e) => e.target.classList.remove(style.inputfocus)} />
            <FontAwesomeIcon icon={faMagnifyingGlass} className={style.inputicon} />
            {/* <div className='admin-profile'>
                <ul>
                  <li>
                    <img src="../image/illustration-john-light-0061869a.png" alt="admin_image" />
                    <div className="admin-text">John Doe <span>admin</span></div>
                  </li>
                  <li></li>
                </ul>
              </div> */}
          </div>
        </div>
        <div className={style.contact}>
          <FontAwesomeIcon icon={faGithub} className={style.contacticon} />
          <FontAwesomeIcon icon={faBell} className={style.contacticon} />
          <img src="../image/illustration-john-light-0061869a.png" alt="profile_image" className={style.contactImage} />
        </div>
      </div>
    </>
  )
}

export default DashboardInput
