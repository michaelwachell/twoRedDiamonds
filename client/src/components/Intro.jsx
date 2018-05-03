import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Parallax} from 'react-spring'
import './Intro.scss'
import Copy from './text.js'
import Images from './Images.js'
import './App.scss'
import Dep from '../../../Assets/coding_things.png'

const Page = ({
  offset,
  caption,
  first,
  second,
  gradient,
  images,
  onClick
}) => { return (
  <React.Fragment>

  <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
    <div className="slopeBegin"/>
  </Parallax.Layer>

  <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
    <div className={`slopeEnd ${gradient}`}/>
  </Parallax.Layer>

  <Parallax.Layer className="text header" offset={offset} speed={0.4}>

      <div>
      <p style={{
          fontSize: "calc(8vw + 10%)"
        }}>{caption}</p>
      <div className={`stripe white`}/>
      <p>{first}</p>
      <p>{second}</p>
    </div>
    <div>

      </div>

  </Parallax.Layer>


  <Parallax.Layer className="image-container" offset={offset} speed={0.8} onClick={onClick}>
  {
  images ?  (<div className="images"><img width="100%" src={images}/></div>) : null
  }


  </Parallax.Layer>

</React.Fragment>

)}

export default class Intro extends Component {

  constructor() {
    super()
    this.state = {}
  }

  scroll(to) {
    this.refs.parallax.scrollTo(to)
  }

  render() {
    return (<Parallax className="container" ref="parallax" pages={4} horizontal="horizontal" scrolling={true}>
      <Page offset={0} gradient="teal" images={Dep} caption="Hi!" first="My name is Michael..." second="" onClick={() => this.scroll(1)}/>
      <Page offset={1} gradient="greyf" caption="I am a media polymath" first="" second="" onClick={() => this.scroll(2)}/>
      <Page offset={2} gradient="black" caption="Web" first="I create using these tools" second="" onClick={() => this.scroll(3)}/>
      <Page offset={3} gradient="teal" caption="Sight & Sound" first="These tools, too" second="" onClick={() => this.scroll(0)}/>
    </Parallax>)
  }
}
