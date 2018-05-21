import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.scss';
import Images from './Images.jsx'

export default class Nuka extends React.Component {
  render() {
    return (
      <Carousel 
                width="60%"
                className="carousel"
                framePadding="10%"
                cellAlign="center"

                heightMode="max"
                height="50%"
                slideWidth={0.5}
                slidesToShow={1}
                cellSpacing={500}
                renderBottomCenterControls={false}
                
                
                >
        {
          Images.first.map((img, key) => {
            return (<img src={img} key={key}/>)
          })
        }
      </Carousel>
    );
  }
}        