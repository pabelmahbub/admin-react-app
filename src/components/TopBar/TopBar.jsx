import React from 'react';
import './TopBar.css';
import {NotificationsNone,Settings,Language} from '@material-ui/icons';

function TopBar() {
  return (
    <div className='topBar'>
       <div className="topBarWrapper">
           <div className="topLeft"><span className='logo'>React Admin</span></div>
             <div className="topRight">
               <div className="topBarIconContainer">
                    <NotificationsNone />
                    <span className='topIconBadge'>1</span>
               </div>
              
               <div className="topBarIconContainer">
                    <Language />
                    <span className='topIconBadge'>3</span>
               </div>
               <div className="topBarIconContainer">
                    <Settings />
               </div>
               <img src='https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt="" className="profile" />
           
            </div>
               
       </div>
    </div>
  )
}

export default TopBar