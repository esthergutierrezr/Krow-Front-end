import React, { createContext, useState, useEffect } from "react";

export const LocationContext = createContext();

function LocationContextProvider(props) {
  const [location, setLocation] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: {
      lat: 38.72493608746106,
      lng: -9.14578853237358,
    },
  });

  const [checked, setChecked] = useState(true);
  const [searchValue, updateSearchValue] = React.useState("");

  return (
    <LocationContext.Provider
      value={{
        location,
        checked,
        searchValue,
        updateSearchValue,
        setChecked,
        setLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
}

export default LocationContextProvider;
