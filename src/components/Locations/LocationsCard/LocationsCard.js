import React from "react";

function LocationsCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.selectedPlace.name}</h1>
      <img
        src={props.selectedPlace.image}
        alt="image"
        width="250"
        height="220"
      />
      <a href={`/locations/${props.selectedPlace.id}`}>Details</a>

      <div>
        <p>Wifi Details</p>
        <p>Network:{props.selectedPlace.network}</p>
        <p>Password:{props.selectedPlace.password}</p>
      </div>
      <div>Closing at </div>
      <button>Check In</button>
    </div>
  );
}

export default LocationsCard;
