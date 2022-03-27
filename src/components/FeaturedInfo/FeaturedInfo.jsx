import React from 'react';
import './FeaturedInfo.css';
import {ArrowDownward,ArrowUpward} from '@material-ui/icons'

function FeaturedInfo() {
  return (
    <div className='featured'>

      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
         <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5666</span>
          <span className="featuredMoneyRate">-12.78<ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub"> Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
         <div className="featuredMoneyContainer">
          <span className="featuredMoney">$6555666</span>
          <span className="featuredMoneyRate">52.78<ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className="featuredSub"> Compared to last month</span>
      </div>


      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
         <div className="featuredMoneyContainer">
          <span className="featuredMoney">$767666</span>
          <span className="featuredMoneyRate">62.78<ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className="featuredSub"> Compared to last month</span>
      </div>


    </div>
  )
}

export default FeaturedInfo