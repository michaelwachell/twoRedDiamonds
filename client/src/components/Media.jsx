import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import './Media.scss'
import Copy from './Text.jsx'
import Images from './Images.jsx'
import Dep from '../../../Assets/coding_things.png'
import Spot from '../../../Assets/spotifight.png'
import Media from '../../../Assets/media_things.png'
import Arrow from '../../../Assets/down-arrow.png'
import Nuka from './Carousel.jsx'

// optional render for iframe. 
// get all assets for visual display. 
// make gifs of videos


const mediaFlex = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  padding: "3em",
  marginTop: "4vh"
  
}

const child = {
  flex: "1 0 21%",
  margin: "5px",
  height: "100px",
  backgroundColor: "teal",
  color: "grey"
}






export default class Intro extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      word: "is da rocking word"
    }

  }



  render() {
    let rows = []
    for (let i = 0; i < 25; i++) { 
      rows.push(<div class={child}>YOU BORK YOU LORK YOU ROCK YOU ROLL</div>)
    }

    return (<div style={mediaFlex} >

    {rows}
    {this.state.word}
  
    </div>)
  }
}
