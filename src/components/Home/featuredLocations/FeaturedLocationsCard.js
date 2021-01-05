import React from 'react';
import { Link } from "react-router-dom";
import Rating from './FeaturedLocationsRating';
import './featured-locations-carousel.css'

const CarouselCard=(props)=>{
  const {id, img, locationName, rating} = props;
  console.log(id)
  return (
    <Link className="carousel-card" to={`/locations/${id}`}>
      <img className="carousel-card__image" src={img} alt="" />
      <div className="carousel-card__text">
        <h3 className="carousel-card__location-name">{locationName}</h3> 
        <Rating rating={rating} />
      </div>
    </Link>
  );
};


export default CarouselCard;

