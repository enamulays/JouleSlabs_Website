import React, { } from 'react';
import style from '../style/style.module.css';
import '../style/Dashboard.css';
import DashboardInput from './DashboardInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import BarChart from './BarChart';
import ProgressPieChart from './ProgressPieChart';

function DashboardRight({ nav }) {

  return (
    <div
      className={`${style.dashright} ${nav?'dash-media': 'dash-none'}`}
    >
      <DashboardInput />
      <div className="main-section">
        <div className="top-section">
          <div className="top-left">
            <div className="top-left-l">
              <h2>Congratulations John!</h2>
              <p>
                You have done 72% 🤩 more sales today. Check your new raising badge in your profile.
              </p>
              <button>VIEW BADGES</button>
            </div>
            <div className="top-left-r">
              <img src="../image/illustration-john-light-0061869a.png" alt="profile_image" />
            </div>
          </div>
          <div className="top-mid">
            <div className="square-box">
              <div className="square-box-info">
                <img src="../image/img1.png" alt="img1" />
                <h4>Profit</h4>
                <h2>$12,628</h2>
                <h5>72.8%</h5>
              </div>
              <div className="square-box-icon">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </div>
          </div>
          <div className="top-right">
            <div className="square-box">
              <div className="square-box-info">
                <img src="../image/img2.png" alt="img2" />
                <h4>Sales</h4>
                <h2>$4,679</h2>
                <h5>28.42%</h5>
              </div>
              <div className="square-box-icon">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Middle Section */}
        <div className="mid-section">
          <div className="mid-left">
            <div className="mid-left-l">
              <div className="mid-left-l-in">
                <BarChart />
              </div>
              <div className="text-content">
                <h1>$</h1>
                <h3>2023</h3>
                <h2>$32.5k</h2>
              </div>
            </div>
            <div className="mid-left-r">
              <ProgressPieChart progress='60' />
              <div className="text-content">
                <h1>$</h1>
                <h3>2022</h3>
                <h2>$41.2k</h2>
              </div>
            </div>
          </div>
          <div className="mid-right">
            <div className="mid-right-t">
              <div className="square-box">
                <div className="square-box-info">
                  <img src="../image/img3.png" alt="img2" />
                  <h4>Payments</h4>
                  <h2>$2,468</h2>
                  <h5>-14.82%</h5>
                </div>
                <div className="square-box-icon">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
              </div>
              <div className="square-box">
                <div className="square-box-info">
                  <img src="../image/img4.png" alt="img2" />
                  <h4>Transactions</h4>
                  <h2>$14,857</h2>
                  <h5>28.14%</h5>
                </div>
                <div className="square-box-icon">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
              </div>
            </div>
            <div className="mid-right-b">
              <div className="square-box">
                <div className="square-box-info">
                  <h4>Profile Report</h4>
                  <h2>$84,686k</h2>
                  <h5>68.2%</h5>
                </div>
                <div className="square-box-icon">
                  {/* <LineChart /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRight;
