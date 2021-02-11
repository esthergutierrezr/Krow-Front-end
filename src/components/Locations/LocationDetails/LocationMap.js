import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { useState, Component } from "react";

function LocationMap(props) {
  const [state, setState] = useState({
    activeMarker: {},
    selectedPlace: {},
    mapCenter: {
      lat: 38.72493608746106,
      lng: -9.14578853237358,
    },
  });

  const onMarkerClick = (location, marker, e) => {
    console.log(location);
    setState({
      ...state,
      selectedPlace: location,
      activeMarker: marker,
    });
  };

  const defaultMapOptions = {
    fullscreenControl: false,
    scaleControl: false,
    zoomControl: false,
    mapTypeControl: false,

    streetViewControl: false,
    rotateControl: false,
  };
  return (
    <div
      style={{
        height: "200px",
        width: "auto",
        backgroundColor: "#ebeadf",
        padding: "30px",
      }}
    >
      <Map
        defaultZoom={1}
        options={defaultMapOptions}
        initialCenter={{
          lat: state.mapCenter.lat,
          lng: state.mapCenter.lng,
        }}
        google={props.google}
        style={{
          height: "230px",
          width: "400px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Marker
          {...location}
          key={location.id}
          onClick={onMarkerClick}
          name={location.name}
          position={{
            lat: location.lat,
            lng: location.lng,
          }}
        />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
})(LocationMap);
