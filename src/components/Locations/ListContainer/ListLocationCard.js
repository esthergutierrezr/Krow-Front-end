import React from "react";
import "./ListLocationCard.css";
import { LocationContext } from "../../../contexts/LocationContext";
import PopUpA from "../LocationDetails/PopUpA";
import PopUpB from "../LocationDetails/PopUpB";
import PopUpC from "../LocationDetails/PopUpC";
import PopUpD from "../LocationDetails/PopUpD";

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
          <button onClick={checked === null ? checkIn : message}>
            {popUpB ? <PopUpB toggleB={togglePopB} /> : null}
            Check In
          </button>
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
            <img src={props.image} alt="image" width="250" height="220" />
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

export default ListLocationCard;
