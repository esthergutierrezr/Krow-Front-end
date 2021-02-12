import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LocationContext = createContext();

function LocationContextProvider(props) {
  const [allLocations, setAllLocations] = useState();
  const [locationId, setLocationId] = useState();
  const [checked, setChecked] = useState(null);
  const [searchValue, updateSearchValue] = useState("");
  const [map, setShowMap] = React.useState(false);
  const [location, setLocation] = useState({
    selectedPlace: {},
    center: {
      lat: 38.72493608746106,
      lng: -9.14578853237358,
    },
  });

  //! Get all Locations
  useEffect(() => {
    axios
      .get("/locations/")
      .then((response) => {
        console.log(response.data);
        setAllLocations(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

  // ! Get location by Id
  useEffect(() => {
    axios
      .get(`/locations/${locationId}`)
      .then((response) => {
        console.log(response.data);
        setLocation(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, [locationId]);

  return (
    <LocationContext.Provider
      value={{
        allLocations,
        setAllLocations,
        locationId,
        location,
        checked,
        searchValue,
        updateSearchValue,
        setChecked,
        setLocation,
        map,
        setShowMap,
        setLocationId,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
}

export default LocationContextProvider;
