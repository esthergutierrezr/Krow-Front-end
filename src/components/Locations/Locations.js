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

  return (
    <div>
      <h1>Locations</h1>
      <SearchInput />
      <button onClick={changeView}>List</button>
      <button onClick={changeView}>Map</button>
      {map ? <MapContainer /> : <ListContainer />}
    </div>
  );
}

export default Locations;
