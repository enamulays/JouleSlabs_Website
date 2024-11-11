import React from 'react'
import style from '../style/style.module.css';
import DashboardInput from './DashboardInput';
import '../style/typography.css'

function TypoGraphySection({ nav }) {
  return (
    <div
    className={`${style.dashright} ${nav?'dash-media': 'dash-none'}`}
    >
      <DashboardInput />
      <div className="typography">
        <div className="typography-top">
          <h2>Material Dashboard Heading</h2>
          <h3>Created using Roboto Font Family</h3>
        </div>
        <div className="typography-in">
          <div className="left-section">
            <div>Header 1</div>
            <div>Header 2</div>
            <div>Header 3</div>
            <div>Header 4</div>
            <div>Header 5</div>
            <div>Header 6</div>
            <div>Paragraph</div>
            <div>Quote</div>
            <div>Muted Text</div>
            <div>Primary Text</div>
            <div>Info Text</div>
            <div>Success Text</div>
            <div>Warning Text</div>
            <div>Danger Text</div>
          </div>
          <div className="right-section">
            <h1>The Life of Material Dashboard</h1>
            <h2>The Life of Material Dashboard</h2>
            <h3>The Life of Material Dashboard</h3>
            <h4>The Life of Material Dashboard</h4>
            <h5>The Life of Material Dashboard</h5>
            <h6>The Life of Material Dashboard</h6>
            <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>
            <p className='text-pink-500'>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
            <p className='text-violet-500'>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
            <p className='text-blue-500'>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
            <p className='text-lime-600'>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
            <p className='text-orange-700'>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
            <p className='text-orange-500'>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
            <h1>Header with small subtitle</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypoGraphySection
