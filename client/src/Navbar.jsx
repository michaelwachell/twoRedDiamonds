import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link } from 'react-router-dom';
import './Navbar.scss';
import Development from './Development.jsx';
import Intro from './Intro.jsx';
import Media from './Media.jsx';
import Contact from './Contact.jsx';
import App from './App.jsx'

const Navbar = (props) => {
  return (
  <nav>
    <div className="btn-group" role="group" aria-label="...">
      <Link to="/"><button type="button" className="btn btn-default">Intro</button></Link>
      <Link to="/media"><button type="button" className="btn btn-default">Media</button></Link>
      <Link to="/development" ><button type="button" className="btn btn-default">Development</button></Link>
      <Link to="/contact" ><button type="button" className="btn btn-default">Contact</button></Link>
    </div>
  </nav>)
}
export default Navbar;
