import React from "react";
import "./Locations.css";
import MapContainer from "./MapContainer.js";
import { Link } from "react-router-dom";

function Locations() {
  return (
    <div>
      <h1>Locations</h1>
      <div>
        <MapContainer />
      </div>
    </div>
  );
}

export default Locations;
