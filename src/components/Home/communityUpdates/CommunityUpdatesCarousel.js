import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from './CommunityUpdatesCard'
import './community-updates-carousel.css';

const cards = [
  {updateName: "Hotel1",
  img: "https://www.swift.com/sites/default/files/styles/cta_background/public/images/Event-banner-simple-map-EU_0.jpg?itok=VKwuCNJG"},
  {updateName: "",
  img: "https://pixinal.com/wp-content/uploads/2019/12/update.jpg"},
  {updateName: "Hotel1",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvqGLr28bOpc7STyhp4ObDSS7Qy4e1-vHhw&usqp=CAU"}
  
]

const Carousel = () => {
  const settings = {
    className: "slides",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 345,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

  return (
    <div id="carousel-community-updates">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <CarouselCard  key={index} {...card}/>
        ))}
      </Slider>
    </div>
  );
};


export default Carousel;

