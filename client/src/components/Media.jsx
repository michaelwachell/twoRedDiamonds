import React from 'react';
import ReactDom from 'react-dom';

import './App.scss';
import './Media.scss';
import {Component} from 'react'

export default class Media extends Component {

  constructor(props) {
    super(props)

    this.state = {}

  }

  render() {
    return (<div className="media-grid portfolio">
   <div>
  <p> check out this wicke proj </p>
   </div>
   <div>
   <img src="https://i.imgur.com/VhBmLIk.jpg" />
   </div>
   <div>
  <p> back again with that proj</p>
   </div>
   <div>
   <img src="https://i.imgur.com/VhBmLIk.jpg" />
   </div>



    </div>)
  }
}
