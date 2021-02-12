import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { useState, Component } from "react";
import ApiLocations from "../ApiLocations.json";

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
        paddingTop: "30px",
      }}
    >
      <Map
        defaultZoom={1}
        disableDefaultUI={true}
        options={defaultMapOptions}
        initialCenter={{
          lat: state.mapCenter.lat,
          lng: state.mapCenter.lng,
        }}
        google={props.google}
        style={{
          height: "200px",
          width: "70%",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        {ApiLocations.filter((locationApi) => locationApi.id == props.id).map(
          (locationApi) => (
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
          )
        )}
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
})(LocationMap);
