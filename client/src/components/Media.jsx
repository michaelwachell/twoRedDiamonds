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
       
        </div>
        <div className="folio-img">
          <figure class="imghvr-flip-vert">
            <img src={Spot} />
              <figcaption>
                <h2>Pick a song and battle your friends in multiplayer minigames created with Socket.io. Emerge the victor, and your song is played. </h2>
              </figcaption>
                  <a href="http://www.spotifight.us" target="_blank"></a>
            </figure>

          </div>

          <div>
           <h1>
            The Neverending Symphony
          </h1>
       
          </div>
          <div className="folio-img">
           <figure class="imghvr-flip-vert">
            <img width="50%" src="http://static.tumblr.com/8c14a29a5ad49be881e2f9b3560247cd/bxckkmi/azdnea1cp/tumblr_static_cchzs14wpvwokggoowcs48s00.png" />
              <figcaption>
                <h2>The Never-Ending Symphony is a musical patchwork that has a beginning but no end. Each week a minute is added by one of our members or a guest. </h2>
              </figcaption>
                  <a href="http://www.theneverendingsymphony.com" target="_blank"></a>
            </figure>
          </div>
          <div className="folio-img">
          <div>
          <h1>
            Composition
          </h1>
       
        </div>
          <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/70553065&color=%23090706&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>

        </div>

      </div>)
  }
}
