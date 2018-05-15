import ReactDOM from 'react-dom';
import React from 'react';
import { Component } from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Development from './Development.jsx';
import Intro from './Intro.jsx';
import Media from './Media.jsx';
import Contact from './Contact.jsx';
import './App.scss';

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (

      <Router>
        <Fragment>
          <Navbar />
          <Route exact="exact" path="/" component={Intro} />
          <Route path="/media" component={Media} />
          <Route path="/development" component={Development} />
          <Route path="/contact" component={Contact} />
        </Fragment>

      </Router>

    )


  }






}
