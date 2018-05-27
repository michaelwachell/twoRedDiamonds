import React from "react";
import Carousel from "nuka-carousel";
import "./Carousel.scss";
import Images from "./Images.jsx";

export default class Nuka extends React.Component {
  render() {
    return (
      <Carousel width="55%" className="carousel">
        {Images.first.map((img, key) => {
          return <img src={img} key={key} />;
        })}
      </Carousel>
    );
  }
}
