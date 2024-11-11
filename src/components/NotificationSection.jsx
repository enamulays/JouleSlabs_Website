import React from 'react'
import style from '../style/style.module.css';
import DashboardInput from './DashboardInput';


function NotificationSection({nav}) {
  return (
    <div
      className={style.dashright}
      style={nav ? { width: 'calc(100% - 230px)' } : { width: 'calc(100% - 67px)' }}
    >
      <DashboardInput/>

    </div>
  )
}

export default NotificationSection
