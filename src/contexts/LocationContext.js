import React, { createContext, useState } from "react";

export const myContext = createContext();

function LocationContext(props) {
  const [location, setLocation] = useState({
    id: 0,
    name: "Wild Code School",
    lat: 38.72493608746106,
    lng: -9.14578853237358,
    network: "Wild Wifi",
    password: "1234",
    overview: "Located at the beautifull centre, the location offers...",
    image:
      "https://images.adsttc.com/media/images/5ca7/72a6/284d/d153/3000/01f2/slideshow/feature-_UC8A1822.jpg?1554477709",
  });

  return (
    <UserContext.Provider value={{ ...location }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
