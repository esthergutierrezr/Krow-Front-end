import React from "react";

function LocationsCard(props) {
  const checkoutClicked = () => console.log("checkedinn");

  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt="image" />
      <div>
        <p>Wifi Details</p>
        <p>Network:{props.network}</p>
        <p>Password:{props.password}</p>
      </div>
      <div>Closing at </div>
      <button onClick={checkoutClicked}>Check Out</button>
    </div>
  );
}

export default LocationsCard;
