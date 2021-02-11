import React from "react";
import "./LocationsCard.css";
import { LocationContext } from "../../../contexts/LocationContext";

import PopUpA from "../LocationDetails/PopUpA";
import PopUpB from "../LocationDetails/PopUpB";
import PopUpC from "../LocationDetails/PopUpC";
import PopUpD from "../LocationDetails/PopUpD";
import LocationsRating from "../LocationsRating";

function LocationsCard(props) {
  const { checked, setChecked } = React.useContext(LocationContext);
  const { location, setLocation } = React.useContext(LocationContext);
  const [popUpA, setPopUpA] = React.useState(false);
  const [popUpB, setPopUpB] = React.useState(false);
  const [popUpC, setPopUpC] = React.useState(false);
  const [popUpD, setPopUpD] = React.useState(false);

  const checkIn = () => {
    setChecked(props.id);
    setPopUpA(!popUpA);
  };
  const checkOut = () => {
    setPopUpC(!popUpC);
  };

  const message = () => {
    console.log("please checkout first");
    setPopUpB(!popUpB);
  };
  const togglePopA = () => {
    setPopUpA(false);
  };
  const togglePopB = () => {
    setPopUpB(false);
  };
  const togglePopC = () => {
    setPopUpC(false);

    setPopUpD(!popUpD);
  };
  const cancelTogglePopC = () => {
    setPopUpC(false);
  };
  const cancelTogglePopD = () => {
    setPopUpD(false);
  };
  const togglePopD = () => {
    setPopUpD(false);
    setChecked(null);
  };
  const onCardClick = () => {
    console.log(props);
    setLocation({
      ...location,
      center: {
        lat: props.lat,
        lng: props.lng,
      },
    });
  };

  return (
    <div className="locationsCard">
      {checked !== props.id ? (
        <div className="checkin">
          <h1>{props.name}</h1>

          <p>1 miembro aqui</p>

          <div>09:00 - 17:00 </div>

          <div> Sintra | </div>
          <a href="https://google.com"> Obtener direccoes </a>
          <div>
            <LocationsRating rating={props.rating} />
          </div>
          <a href={`/locations/${props.id}`}>Details</a>

          <button onClick={onCardClick}>
            <img src={props.image} alt="image" width="150" height="150" />
          </button>
          <button onClick={checked === null ? checkIn : message}>
            Check In
          </button>
          {popUpB ? <PopUpB toggleB={togglePopB} /> : null}
        </div>
      ) : (
        <div className="checkout">
          <div>
            <h1>{props.name}</h1>
            {popUpA ? <PopUpA toggle={togglePopA} /> : null}
            <p>6 miembro(s) aqui</p>
            <div>Aberto ate as 22:00 </div>
            <p>wifi:{props.network}</p>
            <p>Password:{props.password}</p>
            <a href={`/locations/${props.id}`}>Details</a>
          </div>

          <div>
            <img
              src={props.image}
              alt="image"
              width="167.2px"
              height="167.2px"
            />
          </div>
          <button onClick={checkOut}>Check Out</button>
          {popUpC ? (
            <PopUpC cancel={cancelTogglePopC} toggle={togglePopC} />
          ) : null}
          {popUpD ? (
            <PopUpD cancel={cancelTogglePopD} toggle={togglePopD} />
          ) : null}
        </div>
      )}
    </div>
  );
}

export default LocationsCard;
