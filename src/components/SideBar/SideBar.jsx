import React from 'react';
import './SideBar.css';
import {LineStyle,Timeline,TrendingUp} from '@material-ui/icons';

function SideBar() {
  return (
    <div className='sideBar'>
     <div className="sideBarWrapper">
         <div className="sideBarMenu">
             <h2 className="sideBarTitle">Dashboard</h2>
                 <ul className="sideBarList">
                     <li className="sideBarListItem active">
                    <LineStyle className='sideBarIcon'/>
                    Home
                     </li>
                     <li className="sideBarListItem">
                    <Timeline className='sideBarIcon'/>
                   Analytics
                     </li>
                     <li className="sideBarListItem">
                    <TrendingUp className='sideBarIcon'/>
                    Sales
                     </li>
                 </ul>
          </div>

          <div className="sideBarMenu">
             <h2 className="sideBarTitle">Quick Menu</h2>
                 <ul className="sideBarList">
                     <li className="sideBarListItem active">
                    <LineStyle className='sideBarIcon'/>
                    Home
                     </li>
                     <li className="sideBarListItem">
                    <Timeline className='sideBarIcon'/>
                   Analytics
                     </li>
                     <li className="sideBarListItem">
                    <TrendingUp className='sideBarIcon'/>
                    Sales
                     </li>
                 </ul>
          </div>

          <div className="sideBarMenu">
             <h2 className="sideBarTitle">Notifications</h2>
                 <ul className="sideBarList">
                     <li className="sideBarListItem active">
                    <LineStyle className='sideBarIcon'/>
                    Home
                     </li>
                     <li className="sideBarListItem">
                    <Timeline className='sideBarIcon'/>
                   Analytics
                     </li>
                     <li className="sideBarListItem">
                    <TrendingUp className='sideBarIcon'/>
                    Sales
                     </li>
                 </ul>
          </div>

          <div className="sideBarMenu">
             <h2 className="sideBarTitle">Notifications</h2>
                 <ul className="sideBarList">
                     <li className="sideBarListItem active">
                    <LineStyle className='sideBarIcon'/>
                    Home
                     </li>
                     <li className="sideBarListItem">
                    <Timeline className='sideBarIcon'/>
                   Analytics
                     </li>
                     <li className="sideBarListItem">
                    <TrendingUp className='sideBarIcon'/>
                    Sales
                     </li>
                 </ul>
          </div>




     </div>

    </div>
  )
}

export default SideBar
