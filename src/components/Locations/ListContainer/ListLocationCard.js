import React from "react";
import "./ListLocationCard.css";
import { LocationContext } from "../../../contexts/LocationContext";
import PopUpCheckIn from "../LocationDetails/PopUps/PopUpCheckIn";
import PopUpAlreadyChecked from "../LocationDetails/PopUps/PopUpAlreadyChecked";
import PopUpRating from "../LocationDetails/PopUps/PopUpRating";
import PopUpConfirmCheckOut from "../LocationDetails/PopUps/PopUpConfirmCheckOut";
import LocationsRating from "../LocationsRating";
import member from "../../Style/SVG/Locations/People.svg";
import time from "../../Style/SVG/Locations/Time.svg";
import network from "../../Style/SVG/Locations/wifi.svg";
import password from "../../Style/SVG/Locations/IconPassword.svg";

function ListLocationCard(props) {
  const { checked, setChecked } = React.useContext(LocationContext);
  const [popUpCheckIn, setPopUpCheckIn] = React.useState(false);
  const [popUpAlreadyChecked, setPopUpAlreadyChecked] = React.useState(false);
  const [popUpRating, setPopUpRating] = React.useState(false);
  const [popUpConfirmCheckOut, setPopUpConfirmCheckOut] = React.useState(false);

  const checkIn = () => {
    setChecked(props.id);
    setPopUpCheckIn(!popUpCheckIn);
  };
  const checkOut = () => {
    setPopUpRating(!popUpRating);
  };

  const message = () => {
    console.log("please checkout first");
    setPopUpAlreadyChecked(!popUpAlreadyChecked);
  };
  const togglePopUpCheckIn = () => {
    setPopUpCheckIn(false);
  };
  const togglePopUpAlreadyChecked = () => {
    setPopUpAlreadyChecked(false);
  };
  const togglePopUpRating = () => {
    setPopUpRating(false);

    setPopUpConfirmCheckOut(!popUpConfirmCheckOut);
  };
  const cancelTogglePopUpRating = () => {
    setPopUpRating(false);
  };
  const cancelTogglePopUpConfirmCheckOut = () => {
    setPopUpConfirmCheckOut(false);
  };
  const togglePopUpConfirmCheckOut = () => {
    setPopUpConfirmCheckOut(false);
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
            {popUpAlreadyChecked ? (
              <PopUpAlreadyChecked toggle={togglePopUpAlreadyChecked} />
            ) : null}
          </div>
          <div className="container">
            <a href={`/locations/${props.id}`}>
              <img src={props.image} alt="image" className="location-image" />
            </a>
            <button
              className={checked ? "indisponivel" : "disponivel"}
              onClick={checked === null ? checkIn : message}
            >
              Check-In
            </button>
          </div>
        </div>
      ) : (
        <div className="checkout-list">
          <div className="content-blue">
            <h1 className="location-name">{props.name}</h1>
            {popUpCheckIn ? <PopUpCheckIn toggle={togglePopUpCheckIn} /> : null}
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
            <div className="wifiDetails">
              <div style={{ fontSize: "9px", display: "flex" }}>
                <img
                  style={{
                    height: "15px",
                    width: "15px",
                    paddingTop: "9px",
                    paddingRight: "5px",
                  }}
                  src={network}
                  alt="network"
                />
                <p style={{ paddingTop: "16px" }}>{props.network}</p>
              </div>
              <div style={{ fontSize: "9px", display: "flex" }}>
                <img
                  style={{
                    height: "15px",
                    width: "15px",
                    paddingTop: "6px",
                    paddingRight: "5px",
                  }}
                  src={password}
                  alt="password"
                />
                <p style={{ paddingTop: "9px" }}>{props.password}</p>
              </div>
            </div>
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
              Check-Out
            </button>
          </div>
          {popUpRating ? (
            <PopUpRating
              cancel={cancelTogglePopUpRating}
              toggle={togglePopUpRating}
            />
          ) : null}
          {popUpConfirmCheckOut ? (
            <PopUpConfirmCheckOut
              cancel={cancelTogglePopUpConfirmCheckOut}
              toggle={togglePopUpConfirmCheckOut}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}

export default ListLocationCard;
