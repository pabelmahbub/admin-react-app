import React from 'react';
import './FeaturedInfo.css';
import {ArrowDownward,ArrowUpward} from '@material-ui/icons'

function FeaturedInfo() {
  return (
    <div className='featured'>

      <div className="featuredItem">
         <span className="featuredTitle">39366</span>
          <span className="featuredMoneyRate">Token Management</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">55,329</span>
          <span className="featuredMoneyRate">User Account</span>
      </div>


      <div className="featuredItem">
        <span className="featuredTitle">¥778,223,010</span>
          <span className="featuredMoneyRate">Transaction Selection</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">¥393,167,000</span>
          <span className="featuredMoneyRate">Amount of Time</span>
      </div>



    </div>
  )
}

export default FeaturedInfo