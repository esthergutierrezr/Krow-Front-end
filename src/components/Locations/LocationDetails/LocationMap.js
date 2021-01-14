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
  return (
    <div style={{ height: "50px", width: "50px" }}>
      <Map
        defaultZoom={1}
        initialCenter={{
          lat: state.mapCenter.lat,
          lng: state.mapCenter.lng,
        }}
        google={props.google}
        style={{ height: "500px", width: "500px" }}
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
