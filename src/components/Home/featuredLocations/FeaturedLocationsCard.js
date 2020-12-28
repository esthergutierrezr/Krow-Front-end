import React from 'react';
import { Link } from "react-router-dom";
import './featured-locations-carousel.css'

const CarouselCard=(props)=>{
  return (
    <Link className="carousel-card" to={`/locations/${props.key}`}>
        <img className="carousel-card__image" src={props.img} alt="" />
        <h3 className="carousel-card__location-name">{props.locationName}</h3>
        <h6 className="carousel-card__location-rating">{props.rating}</h6>
    </Link>
  );
};


export default CarouselCard;

