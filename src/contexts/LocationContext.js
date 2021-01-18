import React, { createContext, useState } from "react";

export const LocationContext = createContext();

function LocationProvider(props) {
  const [location, setLocation] = useState({});

  return (
    <LocationContext.Provider
      value={{ location: location, setLocation: setLocation }}
    >
      {props.children}
    </LocationContext.Provider>
  );
}

export default LocationProvider;
