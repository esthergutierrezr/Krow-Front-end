import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from './FeaturedLocationsCard'

const cards = [
  {locationName: "Hotel 1",
  rating: 4.5,
  img: "https://images.unsplash.com/photo-1551023629-106d39e0c145?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60"},
  {locationName: "Hotel 2",
  rating: 4.8,
  img: "https://images.unsplash.com/photo-1468512442914-319d95deb34a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60"},
  {locationName: "Hotel 3",
  rating: 5,
  img: "https://images.unsplash.com/photo-1546971587-02375cbbdade?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60"},
  {locationName: "Hotel 4",
  rating: 3,
  img: "https://images.unsplash.com/photo-1546538071-ea2ae093450b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60"},
]

const Carousel = () => {
  const settings = {
    className: "leonvdk",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    initialSlide: -0.2,
    padding: "30px",
    swipeToSlide: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      }
    }
  ]
};
  return (
    <div id="carousel-featured-locations">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <CarouselCard id={index} {...card}/>
        ))}
      </Slider>
    </div>
  );
};


export default Carousel;

