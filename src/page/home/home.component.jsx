import React from 'react'

import HomeParallax from '../../components/home-parallax/home-parallax.component';
import PortOverview from '../../components/port-overview/port-overview.component';

import './home.style.scss';

const Homepage = () => {
    
// console.log(portfolio);
    return (
        <div className='mt-5'>
            <HomeParallax/>
            <PortOverview/>
        </div>
    )
}



export default  (Homepage);