import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ApiLocations from "./ApiLocations.json";
import LocationsCard from "./LocationsCard/LocationsCard.js";
import { LocationContext } from "../../contexts/LocationContext.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MapContainer.css";

function MapContainer(props) {
  const { location, setLocation } = useContext(LocationContext);
  // const { locations, setLocations } = React.useState({});
  const settings = {
    className: "slides",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    // slidesToScroll: 4,
    initialSlide: 0,
    padding: "30px",
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Link to="/">HomePage</Link>
      <div style={{ height: "350px", width: "100vw" }}>
        <Map
          style={{ height: "350px", width: "100vw" }}
          containerStyle={{ height: "350px", width: "100vw" }}
          zoom={16}
          center={{
            lat: location.center.lat,
            lng: location.center.lng,
          }}
          initialCenter={{
            lat: 38.72493608746106,
            lng: -9.14578853237358,
          }}
          google={props.google}
        >
          {ApiLocations.map((locationApi) => (
            <Marker
              {...locationApi}
              key={locationApi.id}
              // onClick={onMarkerClick}
              name={locationApi.name}
              position={{
                lat: locationApi.lat,
                lng: locationApi.lng,
              }}
            />
          ))}
        </Map>
      </div>
      <div class="carousel-locations">
        <Slider {...settings}>
          {ApiLocations.map((location) => (
            <div>
              <LocationsCard {...location} />{" "}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
})(MapContainer);
