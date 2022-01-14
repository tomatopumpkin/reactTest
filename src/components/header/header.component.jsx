import React from "react";
import { Link } from "react-router-dom";

import './header.style.scss';

const Header = () => {
    return(
        <header className="fixed-top navbar-sticky bg-white border-bottom">
        <div className="container">
         <div>
            <Link to='/' className="logo">protfolio</Link>
         </div>
         <div className="navigation">
           <ul className="navigation-menu">
             <li className="sub-menu">
               <Link to={process.env.PUBLIC_URL + '/'}>home</Link>
             </li>
             <li className="sub-menu">
               <Link to={process.env.PUBLIC_URL + '/about'}>about</Link>
             </li>
             <li className="sub-menu">
               <Link to={process.env.PUBLIC_URL + '/protfolio'}>protfolio</Link>
             </li>
             <li className="sub-menu">
               <Link to={process.env.PUBLIC_URL + '/resume'}>resume</Link>
             </li>
             <li className="sub-menu">
               <Link to={process.env.PUBLIC_URL + '/contact'}>contact</Link>
             </li>
           </ul>
         </div>
        </div>
      </header>
    )
}

export default Header;