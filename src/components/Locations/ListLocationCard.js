import React from "react";
import "./ListLocationCard.css";

function ListLocationCard(props) {
  const [check, setCheck] = React.useState(true);
  const checkIn = () => {
    setCheck(!check);
  };

  return (
    <div>
      {check ? (
        <div className="checkin">
          <h1>{props.name}</h1>

          <img src={props.image} alt="image" width="250" height="220" />
          <a href={`/locations/${props.id}`}>Details</a>
          <div>Closing at </div>
          <button onClick={checkIn}>Check In</button>
        </div>
      ) : (
        <div className="checkout">
          <h1>{props.name}</h1>

          <img src={props.image} alt="image" width="250" height="220" />
          <a href={`/locations/${props.id}`}>Details</a>

          <div>
            <p>Wifi Details</p>
            <p>Network:{props.network}</p>
            <p>Password:{props.password}</p>
          </div>
          <div>Closing at </div>

          <button onClick={checkIn}>Check Out</button>
        </div>
      )}
    </div>
  );
}

export default ListLocationCard;
