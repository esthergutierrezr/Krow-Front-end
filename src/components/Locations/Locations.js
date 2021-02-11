import React from "react";
import "./Locations.css";
import MapContainer from "./MapContainer.js";
import { Link } from "react-router-dom";
import ListContainer from "./ListContainer/ListContainer";
import SearchInput from "./SearchInput";
import { RectangleSearchBar } from "../Style/LocationStyles";
import { LocationContext } from "../../contexts/LocationContext";

function Locations() {
  const { map } = React.useContext(LocationContext);

  return (
    <div className="locations-js">
      {map ? (
        <MapContainer />
      ) : (
        <div className="search-container">
          <div className="search-icons">
            <SearchInput />
          </div>

          <ListContainer />
        </div>
      )}
    </div>
  );
}

export default Locations;
