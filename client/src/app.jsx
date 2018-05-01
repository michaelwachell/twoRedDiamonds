import React from 'react'
import ReactDOM from 'react-dom'
import {Parallax} from 'react-spring'
import './App.scss'
import Copy from './text.js'

const Page = ({
  offset,
  caption,
  first,
  second,
  gradient,
  onClick
}) => (<React.Fragment>
  <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
    <div className="slopeBegin"/>
  </Parallax.Layer>

  <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
    <div className={`slopeEnd ${gradient}`}/>
  </Parallax.Layer>

  <Parallax.Layer className="text number" offset={offset} speed={0.3}>
    <span>{offset + 1}</span>
  </Parallax.Layer>

  <Parallax.Layer className="text header" offset={offset} speed={0.4}>
    <span>
      <p style={{
          fontSize: "calc(5vw + 10%)"
        }}>{caption}</p>
      <div className={`stripe ${gradient}`}/>
      <p>{first}</p>
      <p>{second}</p>

    </span>
  </Parallax.Layer>
</React.Fragment>)

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  scroll(to) {
    this.refs.parallax.scrollTo(to)
  }

  render() {
    return (<Parallax className="container" ref="parallax" pages={3} horizontal="horizontal" scrolling={true}>
      <Page offset={0} gradient="greyf" caption="Michael is..." first="Michael is a polymath" second="dolor sit" onClick={() => this.scroll(1)}/>
      <Page offset={1} gradient="greyf" caption="Media" first="a" second="adipiscing elit" onClick={() => this.scroll(2)}/>
      <Page offset={2} gradient="greyf" caption="Repos" first="Morbi quis" second="est dignissim" onClick={() => this.scroll(0)}/>
    </Parallax>)
  }
}
