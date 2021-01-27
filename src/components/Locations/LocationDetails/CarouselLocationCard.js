import React from "react";
import "./LocationCarousel.css";

const CarouselCard = (props) => {
  const { img } = props;

  return (
    <div className="locationCarouselCard">
      <img className="locationCard-img" src={img} alt="" />
    </div>
  );
};

export default CarouselCard;
