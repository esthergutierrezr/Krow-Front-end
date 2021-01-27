import React from "react";
import "./Locations.css";
import MapContainer from "./MapContainer.js";
import { Link } from "react-router-dom";
import ListContainer from "./ListContainer/ListContainer";
import SearchInput from "./SearchInput";

function Locations() {
  const [map, setShowMap] = React.useState(false);
  // const [list, setShowList] = React.useState(true);

  // const showList = () => {
  //   setShowList(list);
  // };

  const changeView = () => {
    setShowMap(!map);
  };

  // const showCurrentLocation = () => {
  //   // Try HTML5 geolocation.
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position: Position) => {
  //         const pos = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         };

  //         infoWindow.setPosition(pos);
  //         infoWindow.setContent("Location found.");
  //         infoWindow.open(map);
  //         map.setCenter(pos);
  //       },
  //       () => {
  //         handleLocationError(true, infoWindow, map.getCenter());
  //       }
  //     );
  //   } else {
  //     // Browser doesn't support Geolocation
  //     handleLocationError(false, infoWindow, map.getCenter());
  //   }
  // }

  return (
    <div>
      <h1>Locations</h1>
      <SearchInput />
      <button onClick={changeView}>List</button>
      <button onClick={changeView}>Map</button>
      {/* <button onClick={showCurrentLocation}>Current location</button> */}
      {map ? <MapContainer /> : <ListContainer />}
    </div>
  );
}

export default Locations;
