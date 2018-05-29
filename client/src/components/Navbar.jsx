import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link } from 'react-router-dom';
import './Navbar.scss';

import Intro from './Intro.jsx';
import Media from './Media.jsx';
import Contact from './Contact.jsx';
import App from './App.jsx'

const Navbar = (props) => {
  return (
   
      <div id="header">
        <div> <img id="twoRedLogo" src="https://ci3.googleusercontent.com/proxy/UQYUMcXxWzW23Yu4YSPrmP3Pg_o8qMgSentObNcPCSoaVRPAVGEzjDN_XBdOMw08zFI2Kg=s0-d-e1-ft#http://i.imgur.com/eIqamb8.jpg" /> </div>
        <div className="siteLink">
          <Link to="/">
            Hello
          </Link>
        </div>
        {
          <div className="siteLink">
            <Link to="/media">
              Portfolio
            </Link>
          </div>
        }
        <div className="siteLink">
          <Link to="/contact">
            Contact
          </Link>
        </div>
    
    </div>)
}
export default Navbar;
