import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from './CommunityUpdatesCard'
import './community-updates-carousel.css';
import CarouselImg from "../../Style/bg/carouselsImg.png"

const cards = [
  {updateName: "Update 1",
  img: CarouselImg},
  {updateName: "Update 2",
  img: CarouselImg},
  {updateName: "Update 31",
  img: CarouselImg}
]

const Carousel = () => {
  const settings = {
    className: "slides",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
    arrows: false,
    centerMode: true,
    // swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.2,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1.2,
        centerMode: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: .95,
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: .9,
      }
    }
  ]
};

  return (
    <div id="carousel-community-updates">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <CarouselCard key={index} {...card}/>
        ))}
      </Slider>
    </div>
  );
};


export default Carousel;

