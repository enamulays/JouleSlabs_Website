import React from 'react'
import style from '../style/style.module.css';
import DashboardInput from './DashboardInput';
import '../style/Table.css'

function TableSection({ nav }) {
  return (
    <div
      className={`${style.dashright} ${nav ? 'dash-media' : 'dash-none'}`}
    >
      <DashboardInput />
      <div className='table '>
        <div className="table-top">
          <h2>Simple Table</h2>
          <h3>Here is a subtitle for this table</h3>
        </div>
        <table className='table-non-responsive'>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>City</th>
            <th>Salary</th>
          </tr>
          <tr>
            <td>Dakota Rice</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td>$36,738</td>
          </tr>
          <tr>
            <td>Minerva Hooper</td>
            <td>Curaçao</td>
            <td>Sinaai-Waas</td>
            <td>$23,789</td>
          </tr>
          <tr>
            <td>Sage Rodriguez</td>
            <td>Netherlands</td>
            <td>Baileux</td>
            <td>$56,142</td>
          </tr>
          <tr>
            <td>Philip Chaney</td>
            <td>Korea, South</td>
            <td>Overland Park</td>
            <td>$38,735</td>
          </tr>
          <tr>
            <td>Doris Greene</td>
            <td>Malawi</td>
            <td>City</td>
            <td>$63,542</td>
          </tr>
          <tr>
            <td>Mason Porter</td>
            <td>Chile</td>
            <td>loucester</td>
            <td>$78,615</td>
          </tr>
        </table>
        <table className='table-responsive'>
          <tr>
            <th>Name/ Country/City/ Salary</th>
          </tr>
          <tr>
            <td>Dakota Rice/ Niger/ Oud-Turnhout/ $36,738</td>
          </tr>
          <tr>
            <td>Minerva Hooper/ Curaçao/ Sinaai-Waas/ $23,789</td>
          </tr>
          <tr>
            <td>Sage Rodriguez/ Netherlands/ Baileux/ $56,142</td>
          </tr>
          <tr>
            <td>Philip Chaney/ Korea, South/ Overland Park/ $38,735</td>
          </tr>
          <tr>
            <td>Doris Greene/ Malawi/ City/ $63,542</td>
          </tr>
          <tr>
            <td>Mason Porter/ Chile/ loucester/ $78,615</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default TableSection
