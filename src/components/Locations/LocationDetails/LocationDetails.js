import React from "react";
import LocationCarousel from "./LocationCarousel.js";
import { Button } from "react-bootstrap";
import LocationMap from "./LocationMap";

function LocationDetails(props) {
  return (
    <div>
      <div>
        <LocationCarousel />
      </div>
      <div
        style={{
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          backgroundColor: "#ece6c7",
          paddingTop: "30px",
          paddingLeft: "30px",
        }}
      >
        <a href={`/locations/`}>Back</a>
        <div>
          <h1>{props.name}</h1>
          <p>icon + opening times</p>
          <p>Icon + Location</p>
          <h2>Overview</h2>
          <p>{props.overview}</p>

          <div>
            <h2>Amenities</h2>
            <h4>Beverages Incruded</h4>
          </div>
          <div>
            <h2>Important Info</h2>
            <h4>Food Policy</h4>
            <p></p>
            <h4>Check-In Instructions</h4>
            <p></p>
          </div>
          <div>
            <h1>Letswort Timings</h1>
          </div>
          <div>
            <h1>Venue Location</h1>
            <link></link>
            <link></link>
            <div>
              <LocationMap />
            </div>
            <button onClick={props.checkIn}>Check In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
