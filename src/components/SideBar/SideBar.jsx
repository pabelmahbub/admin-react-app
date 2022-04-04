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
                     <Link to="/users" className='link'>
                     <li className="sideBarListItem">
                    <Timeline className='sideBarIcon'/>
                  Token
                     </li>
                     </Link>
                     <li className="sideBarListItem">
                    <TrendingUp className='sideBarIcon'/>
                   Tray
                     </li>
                 </ul>
          </div>

          <div className="sideBarMenu">
             <h2 className="sideBarTitle">User Account</h2>
                 <ul className="sideBarList">
                  <Link to="/users" className='link'>
                     <li className="sideBarListItem">
                    <LineStyle className='sideBarIcon'/>
                    Personal
                     </li>
                     </Link>

                   
                     <li className="sideBarListItem">
                    <Timeline className='sideBarIcon'/>
                   company
                     </li>
                     
                     <li className="sideBarListItem">
                    <TrendingUp className='sideBarIcon'/>
                    Penalty
                     </li>
                 </ul>
          </div>

          <div className="sideBarMenu">
             <h2 className="sideBarTitle">Contract Data</h2>
                 <ul className="sideBarList">
                     <li className="sideBarListItem">
                    <LineStyle className='sideBarIcon'/>
                    File
                     </li>
                     <li className="sideBarListItem">
                    <Timeline className='sideBarIcon'/>
                   Contract Status
                     </li>
                     <li className="sideBarListItem">
                    <TrendingUp className='sideBarIcon'/>
                   Payment
                     </li>
                 </ul>
          </div>

          <div className="sideBarMenu">
             <h2 className="sideBarTitle">Communication</h2>
                 <ul className="sideBarList">
                     <li className="sideBarListItem">
                    <LineStyle className='sideBarIcon'/>
                    Information
                     </li>
                     <li className="sideBarListItem">
                    <Timeline className='sideBarIcon'/>
                   Review
                     </li>
                     <li className="sideBarListItem">
                    <TrendingUp className='sideBarIcon'/>
                    AI Chat Bot
                     </li>
                 </ul>
          </div>




     </div>

    </div>
  )
}

export default SideBar
