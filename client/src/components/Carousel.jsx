import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.scss';
import Images from './Images.jsx'

export default class Nuka extends React.Component {
  afterSlide (currentSlide) {
    const list = window.document.querySelector('.slider-list');
    const nextSlide = list.childNodes[currentSlide];
    list.style.height = nextSlide.offsetHeight + 'px';
}

  
  render() {
    return (
   
      <Carousel 
                afterSlide={this.afterSlide}
                width="65%"
                className="carousel"             
                cellAlign="center"
                
                slideWidth={0.8}
                cellSpacing={300}
                renderBottomCenterControls={()=> false}
             
                >
        {
          Images.first.map((img, key) => {
            return (<img  className="vis" src={img} key={key}/>)
          })
        }
      </Carousel>
    );
  }
}        