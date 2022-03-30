import React from 'react';
import './SideBar.css';
import {LineStyle,Timeline,TrendingUp} from '@material-ui/icons';
import { Link } from 'react-router-dom';

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
                  <Link to="/users" className='link'>
                     <li className="sideBarListItem">
                    <LineStyle className='sideBarIcon'/>
                    Users
                     </li>
                     </Link>

                     <Link to="/" className='link'>
                     <li className="sideBarListItem">
                    <Timeline className='sideBarIcon'/>
                   Analytics
                     </li>
                     </Link>
                     
                     <li className="sideBarListItem">
                    <TrendingUp className='sideBarIcon'/>
                    Sales
                     </li>
                 </ul>
          </div>

          <div className="sideBarMenu">
             <h2 className="sideBarTitle">Notifications</h2>
                 <ul className="sideBarList">
                     <li className="sideBarListItem">
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
                     <li className="sideBarListItem">
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
