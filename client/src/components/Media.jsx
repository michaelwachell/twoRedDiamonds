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
import TicTac from '../../../Assets/tictac.png'
import Nuka from './Carousel.jsx'
const QM = "https://78.media.tumblr.com/952e9b64a7c18c44256cc97271cfd025/tumblr_ou1jqjwnKg1ri5ljho1_r3_500.gif"

// optional render for iframe. 
// get all assets for visual display. 
// make gifs of videos




const Nev = "http://static.tumblr.com/8c14a29a5ad49be881e2f9b3560247cd/bxckkmi/azdnea1cp/tumblr_static_cchzs14wpvwokggoowcs48s00.png"




export default class Intro extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
    this.newScroll= this.newScroll.bind(this);
    this.Page = this.Page.bind(this)
  }





  Page ({
    offset,
    caption,
    first,
    second,
    gradient,
    images,
    onClick,
    count = 4,
    context,
    url
  }) {
    return (
      <React.Fragment >
        <Parallax.Layer className="getBack" offset={offset} speed={0.2} >
          <div className="circBegin-m getBack" />
        </Parallax.Layer>
  
  
        <Parallax.Layer className="getBack" offset={offset} speed={-0.2} >
          <div className={`circEnd-m ${gradient}`} />
        </Parallax.Layer>
  
  
  
        <Parallax.Layer className="wrapword textm" offset={offset} speed={0.4}>
  
          <div width="100%">
            <div width="100%" style={{ fontSize: "calc(3vw + 10%)" }}>{caption}</div>
            < div width="100%" className="to-the-front" style={{ fontSize: "calc(1vw + 10%)", paddingLeft: "1%", minWidth: "100%" }}>{first} </div>
          </div>
  
  
        </Parallax.Layer>
  
  
 
  
        <Parallax.Layer className="arrow" height="10%" offset={offset} speed={0.8} onClick={()=> this.newScroll(offset, count)}  >
  
          <div className="arrow-img" ><img width="80%" src={Arrow} onClick={()=> this.newScroll(offset, count)} /></div>
  
  
  
        </Parallax.Layer>
        <Parallax.Layer className="imagesM" offset={offset} speed={0.8}>
          
          {
            images ? (<div ><a height="100px" href={url} target="_blank" > <img  width="80%" src={images} /> </a></div>) 
            : offset === 3 
            ? (<div width="100%" > <iframe  width="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/82297113&color=%231c2919&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> </div>) 
            : !images && offset===2 ? (<Nuka/>) 
            : null
          }
  
  
        </Parallax.Layer>

        
  
      </React.Fragment>
  
    )
  }

  scroll(to) {
    this.refs.parallax.scrollTo(to)
  }

  newScroll(offset, count) {
    return (offset + 1 === count ? this.scroll(0) : this.scroll(offset + 1));
  }

  render() {
    return (<Parallax className="media-container" ref="parallax" pages={4} vertical="vertical" scrolling={true}>
      <this.Page offset={0} newScroll={this.newScroll}  gradient="teal" className="roundMe" images={Spot} url="https://github.com/PupprPiper/SpotiFight" caption="Spotifight.us" first={Copy.Spotifight()}  />
      <this.Page offset={1} newScroll={this.newScroll} images={TicTac} gradient="teal" caption="Vanilla Development" first={Copy.Tic()} url="/tictac/public/index.html" />
      <this.Page offset={2} newScroll={this.newScroll}  gradient="greyf" caption="Visual" first={Copy.Visual()}  />
      <this.Page offset={3} newScroll={this.newScroll}  gradient="greyf" caption="Composition" first={Copy.Comp()}  />
      {/* <this.Page offset={4} newScroll={this.newScroll} gradient="teal" caption="lwnmwr" images={QM} first={Copy.Lwn()}  /> */}
    </Parallax>)
  }
}
