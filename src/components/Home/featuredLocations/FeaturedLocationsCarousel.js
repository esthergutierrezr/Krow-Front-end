import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from './FeaturedLocationsCard'

const cards = [
  {locationName: "Hotel1",
  rating: 4.5,
  img: "https://images.unsplash.com/photo-1551023629-106d39e0c145?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60"},
  {locationName: "Hotel2",
  rating: 4.5,
  img: "https://images.unsplash.com/photo-1468512442914-319d95deb34a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60"},
  {locationName: "Hotel3",
  rating: 4.5,
  img: "https://images.unsplash.com/photo-1546971587-02375cbbdade?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60"},
  {locationName: "Hotel4",
  rating: 4.5,
  img: "https://images.unsplash.com/photo-1546538071-ea2ae093450b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60"},
]

const Carousel = () => {
  const settings = {
    className: "slides",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    // slidesToScroll: 4,
    initialSlide: 0,
    centerPadding: "30px",
    swipeToSlide: true,
    arrows: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.05,
        slidesToScroll: 1,
      }
    }
  ]
};
  return (
    <div id="carousel">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <CarouselCard key={index} {...card}/>
        ))}
      </Slider>
    </div>
  );
};


export default Carousel;

