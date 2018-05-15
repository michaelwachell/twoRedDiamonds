import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import './Media.scss'
import Copy from './text.jsx'
import Images from './Images.js'
import Dep from '../../../Assets/coding_things.png'
import Spot from '../../../Assets/spotifight.png'
import Media from '../../../Assets/media_things.png'
import Arrow from '../../../Assets/down-arrow.png'

// optional render for iframe. 
// get all assets for visual display. 
// make gifs of videos




const Nev = "http://static.tumblr.com/8c14a29a5ad49be881e2f9b3560247cd/bxckkmi/azdnea1cp/tumblr_static_cchzs14wpvwokggoowcs48s00.png"

const spotCopy = ""

const Page = ({
  offset,
  caption,
  first,
  second,
  gradient,
  images,
  onClick,
  count = 4,
  context
}) => {
  return (
    <React.Fragment className="media-back">
      <Parallax.Layer offset={offset} speed={0.2} >
        <div className="circBegin" />
      </Parallax.Layer>


      <Parallax.Layer offset={offset} speed={-0.2} >
        <div className={`circEnd ${gradient}`} />
      </Parallax.Layer>



      <Parallax.Layer className="textm headerm wrapword" offset={offset} speed={0.4}>

<div>


          <div style={{ fontSize: "calc(3vw + 10%)" }}>{caption}</div>



          < div style={{ fontSize: "calc(1vw + 10%)", paddingLeft: "1%" }}>{first} </div>



    </div>


      </Parallax.Layer>


      <Parallax.Layer className="image-container-m" offset={offset} speed={0.8}>
        {
          images ? (<div className="images"><img className="shadow" width="80%" src={images} /></div>) : offset === 2 ? (<iframe className="frame" width="20%" height="auto" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/70553065&color=%23090706&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>) : null
        }


      </Parallax.Layer>

         <Parallax.Layer className="image-container-m" offset={offset} speed={0.8} onClick={()=> this.context.parallax.scrollTo(offset + 1 === count ? 0 : offset+1)} >
        
          <div className="arrow"  ><img width="80%" src={Arrow} /></div> 
        


      </Parallax.Layer>

    </React.Fragment>

  )
}

export default class Intro extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.scroll = this.scroll.bind(this);
  }

  scroll(to) {
    this.refs.parallax.scrollTo(to)
  }

  render() {
    return (<Parallax className="container" ref="parallax" pages={4} vertical="vertical" scrolling={true}>
      <Page offset={0} gradient="teal" className="roundMe" images={Spot} caption="Spotifight.us" first={Copy.Spotifight()} />
      <Page offset={1} gradient="black" images={Dep} caption="Visual" first="design stuff"  />
      <Page offset={2} gradient="greyf" caption="Composition" first={Copy.TNES()} />
      <Page offset={3} gradient="teal" caption="lwnmwr" first="coming soon..."  />
    </Parallax>)
  }
}
