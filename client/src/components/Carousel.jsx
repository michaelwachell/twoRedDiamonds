import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.scss';
import Images from './Images.jsx'

export default class Nuka extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      
    }
  }
  
  
  afterSlide (currentSlide) {
    const list = window.document.querySelector('.slider-list');
    const nextSlide = list.childNodes[currentSlide];
    list.style.height = nextSlide.offsetHeight + 'px';
}

  
  render() {
    return (
   
      <Carousel 
                afterSlide={(e)=> this.afterSlide(e)}
                width="75%"
                className="carousel"             
                cellAlign="center"
                slideWidth={0.8}
                cellSpacing={300}
                renderBottomCenterControls={()=> false}
                wrapAround={true}
                initial
                >
        {
          Images.first.map((img, key) => {
            return (<img  className="vis" src={img} key={key} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>)
          })
        }
      </Carousel>
    );
  }
}        