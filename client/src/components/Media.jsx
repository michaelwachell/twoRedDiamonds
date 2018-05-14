import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Parallax} from 'react-spring'
import './Media.scss'
import Copy from './text.jsx'
import Images from './Images.js'
import Dep from '../../../Assets/coding_things.png'
import Spot from '../../../Assets/spotifight.png'
import Media from '../../../Assets/media_things.png'

const spotCopy = ""

const Page = ({
  offset,
  caption,
  first,
  second,
  gradient,
  images,
  onClick
}) => { return (
  <React.Fragment className="media-back">
  <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
    <div className="circBegin"/>
  </Parallax.Layer>


  <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
    <div className={`circEnd ${gradient}`}/>
  </Parallax.Layer>



  <Parallax.Layer className="text headerm wrapword" offset={offset} speed={0.4}>
      <text>
      <table className="text headerm wrapword" height="300px">
       
        <tr>
            <td>
              <p  style={{fontSize: "calc(3vw + 10%)"}}>{caption}</p>
            </td>
        </tr>
        
           
         <tr>
            <td height="100px">
              <p  style={{fontSize: "calc(1vw + 10%)"}}>{first} </p>
            </td>
        </tr>
          
        </table>
      </text>ß
   

  </Parallax.Layer>


  <Parallax.Layer className="image-container" offset={offset} speed={0.8} onClick={onClick}>
  {
  images ? (<div className="images"><img width="80%" src={images}/></div>) :  null
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
    return (<Parallax className="container" ref="parallax" pages={4} vertical="vertical" scrolling={true}>
      <Page offset={0} gradient="teal" className="roundMe" images={Spot} caption="Spotifight.us" first={Copy.Spotifight()} second="*click or tap*" onClick={() => this.scroll(1)}/>
      <Page offset={1} gradient="greyf" caption="Composition" first={Copy.TNES()} second="" onClick={() => this.scroll(2)}/>
      <Page offset={2} gradient="black" images={Dep} caption="Visual" first="design stuff" second="" onClick={() => this.scroll(3)}/>
      <Page offset={3} gradient="teal" images={Media} caption="lwnmwr" first="coming soon..." second="" onClick={() => this.scroll(0)}/>
    </Parallax>)
  }
}
