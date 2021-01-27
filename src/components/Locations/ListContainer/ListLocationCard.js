import React from "react";
import "./ListLocationCard.css";
import { LocationContext } from "../../../contexts/LocationContext";

function ListLocationCard(props) {
  const { checked, setChecked } = React.useContext(LocationContext);

  const checkIn = () => {
    setChecked(props.id);
  };
  const checkOut = () => {
    setChecked(null);
  };

  return (
    <div className="locationsCard">
      {checked !== props.id ? (
        <div className="checkin">
          <div>
            <h1>{props.name}</h1>
            <p>1 miembro aqui</p>

            <div>09:00 - 17:00 </div>
            <div> Sintra | Obtener direccoes </div>
            <div> * * * * 4.9</div>
            <a href={`/locations/${props.id}`}>Details</a>
          </div>
          <div>
            <img src={props.image} alt="image" width="250" height="220" />
          </div>
          <button onClick={checkIn}>Check In</button>
        </div>
      ) : (
        <div className="checkout">
          <div>
            <h1>{props.name}</h1>
            <p>6 miembro(s) aqui</p>
            <div>Aberto ate as 22:00 </div>
            <p>wifi:{props.network}</p>
            <p>Password:{props.password}</p>
            <a href={`/locations/${props.id}`}>Details</a>
          </div>

          <div>
            <img src={props.image} alt="image" width="250" height="220" />
          </div>
          <button onClick={checkOut}>Check Out</button>
        </div>
      )}
    </div>
  );
}

export default ListLocationCard;
