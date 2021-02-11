import React from 'react';
import { Link } from "react-router-dom";


const CarouselCard=(props)=>(
  <div className="carousel-card">
    <img className="important-message-carousel-card__image" src={props.img} alt="" />
  </div>
  );

export default CarouselCard;
