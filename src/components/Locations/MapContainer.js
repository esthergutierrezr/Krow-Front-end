import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import ApiLocations from "./ApiLocations.json";
import LocationsCard from "./LocationsCard/LocationsCard.js";

function MapContainer(props) {
  const [state, setState] = useState({
    showingInfoWindow: false,
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
      showingInfoWindow: true,
    });
  };

  const onMapClicked = (props) => {
    if (state.showingInfoWindow) {
      setState({ ...state, activeMarker: null, showingInfoWindow: false });
    }
  };

  return (
    <div>
      <Link to="/">HomePage</Link>
      <Map
        defaultZoom={1}
        initialCenter={{
          lat: state.mapCenter.lat,
          lng: state.mapCenter.lng,
        }}
        google={props.google}
        onClick={onMapClicked}
      >
        {ApiLocations.map((location) => (
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
        ))}

        <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInfoWindow}
        >
          <div>
            <LocationsCard {...state.selectedPlace} />
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
})(MapContainer);
