import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselLocationCard from "./CarouselLocationCard";
import "./LocationCarousel.css";

const cards = [
  {
    locationName: "Hotel 1",
    img:
      "https://images.unsplash.com/photo-1551023629-106d39e0c145?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    locationName: "Hotel 2",
    img:
      "https://images.unsplash.com/photo-1468512442914-319d95deb34a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    locationName: "Hotel 3",
    img:
      "https://images.unsplash.com/photo-1546971587-02375cbbdade?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=60",
  },
];

const Carousel = () => {
  const settings = {
    className: "location-slides",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 4,
    initialSlide: 0,
    // padding: "30px",
    swipeToSlide: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="locations-carousel">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <CarouselLocationCard id={index} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
