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
  padding: "159px",
  
}

const colCont = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "5px",
  
}

const child = {
  flex: "1 0 25%",
  display: "inline-block",
  margin: "5px",
  height: "100px",
  color: "grey",
  minWidth: "200px"
}

const codeSnip = {
  margin: "5px",
  height: "100px",
  color: "grey",
  minWidth: "200px",
  backgroundColor:"red",

}

const bigPic = {
  margin: "5px",
  height: "100px",
  color: "white",
  backgroundColor:"blue",
  minWidth: "200px"
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
    let col = []
    for (let i = 0; i < 10; i++) { 
      rows.push(<div style={child}>YOU BORK YOU LORK YOU ROCK YOU ROLL</div>)
    }

    col.push(<div style={bigPic}>HERE IS THE BIG PICTURE</div>)
    col.push(<div style={codeSnip}>HERE IS THE CODE SNIPPET</div>)

    return (<div style={mediaFlex} >

      <div style={colCont}>
      
      {col}
      
      </div>

      <div style={colCont}>
      
      {rows}
      
      </div>



  
    </div>)
  }
}
