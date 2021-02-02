import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ApiLocations from "./ApiLocations.json";
import LocationsCard from "./LocationsCard/LocationsCard.js";
import { LocationContext } from "../../contexts/LocationContext.js";

function MapContainer(props) {
  const { location, setLocation } = useContext(LocationContext);
  // const { locations, setLocations } = React.useState({});

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
      <div style={{ display: "flex" }}>
        {ApiLocations.map((location) => (
          <div>
            <LocationsCard {...location} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
})(MapContainer);
