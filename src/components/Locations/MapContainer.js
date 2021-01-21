import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ApiLocations from "./ApiLocations.json";
import LocationsCard from "./LocationsCard/LocationsCard.js";
import { LocationContext } from "../../contexts/LocationContext.js";

function MapContainer(props) {
  // const [location, setlocation] = uselocation({
  //   showingInfoWindow: false,
  //   activeMarker: {},
  //   selectedPlace: {},
  //   mapCenter: {
  //     lat: 38.72493608746106,
  //     lng: -9.14578853237358,
  //   },
  // });

  const { location, setLocation } = useContext(LocationContext);

  const onMarkerClick = (selectedLocation, marker, e) => {
    console.log(selectedLocation);
    setLocation({
      ...location,
      selectedPlace: selectedLocation,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    //console.log(`here: ${location.selectedPlace}`);
  };

  const onMapClicked = (props) => {
    if (location.showingInfoWindow) {
      setLocation({
        ...location,
        activeMarker: null,
        showingInfoWindow: false,
      });
    }
  };

  return (
    <div>
      <Link to="/">HomePage</Link>
      <Map
        defaultZoom={1}
        initialCenter={{
          lat: location.mapCenter.lat,
          lng: location.mapCenter.lng,
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
          marker={location.activeMarker}
          visible={location.showingInfoWindow}
        >
          <div>
            <LocationsCard {...location} />
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
})(MapContainer);
