import React, { createContext, useState, useEffect } from "react";

export const LocationContext = createContext();

function LocationContextProvider(props) {
  const [location, setLocation] = useState({
    selectedPlace: {},
    center: {
      lat: 38.72493608746106,
      lng: -9.14578853237358,
    },
  });

  const [checked, setChecked] = useState(null);
  const [searchValue, updateSearchValue] = React.useState("");
  const [map, setShowMap] = React.useState(false);
  return (
    <LocationContext.Provider
      value={{
        location,
        checked,
        searchValue,
        updateSearchValue,
        setChecked,
        setLocation,
        map,
        setShowMap,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
}

export default LocationContextProvider;
