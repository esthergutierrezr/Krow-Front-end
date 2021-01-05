import React from 'react';
import { Link } from "react-router-dom";


const CarouselCard=(props)=>{
  return (
    <Link className="carousel-card" to={`/locations/${props.key}`}>
        <img className="cu-carousel-card__image" src={props.img} alt="" />
    </Link>
  );
};


export default CarouselCard;

