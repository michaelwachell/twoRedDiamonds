import React from 'react';
import ReactDom from 'react-dom';
import Spot from '../../../Assets/spotifight.png'
// http://imagehover.io/#download
import './App.scss';
import './Media.scss';
import {Component} from 'react'

export default class Media extends Component {

  constructor(props) {
    super(props)

    this.state = {}

  }

  render() {
    return (<div className="media-container">

      <div className="media-grid">

        <div>
          <h1>
            Spotifight.us
          </h1>
          <p>Pick a song and battle your friends in multiplayer minigames created with Socket.io. Emerge the victor, and your song is played.
          </p>
        </div>
        <div className="folio-img">
          <figure class="imghvr-fade">
            <img src={Spot} />
              <figcaption>
                here is the content
              </figcaption>
            </figure>

          </div>

          <div>
            <h2>
              cback againg wit dat bprojt this wicke proj
            </h2>
          </div>
          <div className="folio-img">
            <img className="radius" src="https://i.imgur.com/VhBmLIk.jpg"/>
          </div>

        </div>

      </div>)
  }
}
