import React from "react";
import "./ListLocationCard.css";
import { LocationContext } from "../../../contexts/LocationContext";
import PopUpA from "../LocationDetails/PopUpA";
import PopUpB from "../LocationDetails/PopUpB";
import PopUpC from "../LocationDetails/PopUpC";
import PopUpD from "../LocationDetails/PopUpD";
import LocationsRating from "../LocationsRating";

function ListLocationCard(props) {
  const { checked, setChecked } = React.useContext(LocationContext);
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

  return (
    <div className="locationsCard">
      {checked !== props.id ? (
        <div className="checkin-list">
          <div className="content">
            <h1>{props.name}</h1>
            <p>1 miembro aqui</p>

            <div>09:00 - 17:00 </div>
            <div> Sintra </div>
            <a href="https://google.com"> Obtener direccoes </a>
            <LocationsRating rating={props.rating} />
          </div>
          <div className="container">
            <a href={`/locations/${props.id}`}>
              <img src={props.image} alt="image" className="location-image" />
            </a>
            <button
              className={checked ? "indisponivel" : "disponivel"}
              onClick={checked === null ? checkIn : message}
            >
              {popUpB ? <PopUpB toggle={togglePopB} /> : null}
              Check In
            </button>
          </div>
        </div>
      ) : (
        <div className="checkout">
          <h1>{props.name}</h1>
          {popUpA ? <PopUpA toggle={togglePopA} /> : null}
          <p>6 miembro(s) aqui</p>
          <div>Aberto ate as 22:00 </div>
          <p>wifi:{props.network}</p>
          <p>Password:{props.password}</p>
          <a href={`/locations/${props.id}`}>Details</a>

          <div className="container">
            <img
              src={props.image}
              alt="image"
              width="167.2px"
              height="167.2px"
            />

            <button className="check-out" onClick={checkOut}>
              Check Out
            </button>
          </div>
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

export default ListLocationCard;
