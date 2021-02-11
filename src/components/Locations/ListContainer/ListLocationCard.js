import React from "react";
import "./ListLocationCard.css";
import { LocationContext } from "../../../contexts/LocationContext";
import PopUpA from "../LocationDetails/PopUps/PopUpA";
import PopUpB from "../LocationDetails/PopUps/PopUpB";
import PopUpC from "../LocationDetails/PopUps/PopUpC";
import PopUpD from "../LocationDetails/PopUps/PopUpD";
import LocationsRating from "../LocationsRating";
import member from "../../Style/SVG/Locations/People.svg";
import time from "../../Style/SVG/Locations/Time.svg";

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
            <h1 className="location-name">{props.name}</h1>
            <div style={{ display: "flex" }}>
              <img
                style={{ height: "10px", width: "10px", paddingRight: "5px" }}
                src={member}
                alt="members"
              />
              <p style={{ fontSize: "9px" }}>1 member here</p>
            </div>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  height: "10px",
                  width: "10px",
                  paddingTop: "12px",
                  paddingRight: "5px",
                }}
                src={time}
                alt="time"
              />
              <div style={{ fontSize: "12px", paddingTop: "10px" }}>
                09:00 - 17:00{" "}
              </div>
            </div>
            <div style={{ fontSize: "12px", padding: "10px" }}>
              {" "}
              Sintra |{" "}
              <a
                href="https://google.com"
                style={{ textDecoration: "underline", fontSize: "12px" }}
              >
                Obtener direccoes{" "}
              </a>{" "}
            </div>

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
        <div className="checkout-list">
          <div className="content-blue">
            <h1 className="location-name">{props.name}</h1>
            {popUpA ? <PopUpA toggle={togglePopA} /> : null}
            <div style={{ display: "flex" }}>
              <img
                style={{ height: "10px", width: "10px", paddingRight: "5px" }}
                src={member}
                alt="members"
              />
              <p style={{ fontSize: "9px" }}>6 member(s) here</p>
            </div>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  height: "10px",
                  width: "10px",
                  paddingTop: "12px",
                  paddingRight: "5px",
                }}
                src={time}
                alt="time"
              />
              <div style={{ fontSize: "12px", paddingTop: "10px" }}>
                Open until 22:00
              </div>
            </div>

            <p>wifi:{props.network}</p>
            <p>Password:{props.password}</p>
            {/* <a href={`/locations/${props.id}`}>Details</a> */}
          </div>
          <div className="container">
            <img
              src={props.image}
              alt="image"
              width="167.2px"
              height="167.2px"
              className="location-image"
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
