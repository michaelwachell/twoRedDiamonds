import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import './Intro.scss'

import Images from './Images.js'
import Dep from '../../../Assets/coding_things.png'
import Me from '../../../Assets/me2.png'
import Media from '../../../Assets/media_things.png'

const Page = ({
  offset,
  caption,
  first,
  second,
  gradient,
  images,
  onClick
}) => {
  return (
    <React.Fragment>

      <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
        <div className="slopeBegin" />
      </Parallax.Layer>

      <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
        <div className={`slopeEnd ${gradient}`} />
      </Parallax.Layer>

      <Parallax.Layer className="image-container" offset={offset} speed={0.8} onClick={onClick}>
        {
          images && offset === 0 ? (<div className="portrait"><img width="30%" src={images} /></div>) : null
        }


      </Parallax.Layer>

      <Parallax.Layer className="text header" offset={offset} speed={0.4}>

        <div>

          <p style={{
            fontSize: "calc(8vw + 10%)"
          }}>{caption}</p>

          <p style={{
            fontSize: "calc(3vw + 10%)"
          }}>{first} </p>
          <p style={{
            fontSize: "calc(1vw + 10%)"
          }}>{second}</p>
        </div>
        <div>

        </div>

      </Parallax.Layer>


      <Parallax.Layer className="image-container" offset={offset} speed={0.8} onClick={onClick}>
        {
          images && offset !== 0 ? (<div className="images"><img width="80%" src={images} /></div>) : null
        }


      </Parallax.Layer>

    </React.Fragment>

  )
}

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
      <Page offset={0} gradient="teal" className="roundMe" images={Me} caption="Hi!" first="My name is Michael..." second="*click or tap*" onClick={() => this.scroll(1)} />
      <Page offset={1} gradient="greyf" caption="I am a media polymath" first="" second="" onClick={() => this.scroll(2)} />
      <Page offset={2} gradient="black" images={Dep} caption="I create..." first="the web using these tools" second="" onClick={() => this.scroll(3)} />
      <Page offset={3} gradient="teal" images={Media} caption="I create..." first="media using these tools" second="" onClick={() => this.scroll(0)} />
    </Parallax>)
  }
}
