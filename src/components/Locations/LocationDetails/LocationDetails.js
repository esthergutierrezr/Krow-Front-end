import React, { useState, useEffect } from "react";
import LocationCarousel from "./LocationCarousel.js";
import { Button } from "react-bootstrap";
import LocationMap from "./LocationMap";
import ApiLocations from "../ApiLocations.json";
import { LocationContext } from "../../../contexts/LocationContext";
import "./LocationDetails.css";
import PopUpCheckIn from "./PopUps/PopUpCheckIn";
import PopUpAlreadyChecked from "./PopUps/PopUpAlreadyChecked";
import PopUpRating from "./PopUps/PopUpRating";
import PopUpConfirmCheckOut from "./PopUps/PopUpConfirmCheckOut";
import LocationsRating from "../LocationsRating";
import member from "../../Style/SVG/Locations/People.svg";
import time from "../../Style/SVG/Locations/Time.svg";
import arrow from "../../Style/SVG/Locations/downArrow.svg";
import website from "../../Style/SVG/Locations/web.svg";
import phone from "../../Style/SVG/Locations/phone.svg";
import network from "../../Style/SVG/Locations/wifi.svg";
import password from "../../Style/SVG/Locations/IconPassword.svg";

function LocationDetails(props) {
  const [moreTextA, setMoreTextA] = useState(false);
  const [moreTextB, setMoreTextB] = useState(false);
  const [moreTextC, setMoreTextC] = useState(false);
  const [moreTextD, setMoreTextD] = useState(false);
  const [moreTextE, setMoreTextE] = useState(false);
  const [location, setLocation] = useState({});
  const [popUpCheckIn, setPopUpCheckIn] = React.useState(false);
  const [popUpAlreadyChecked, setPopUpAlreadyChecked] = React.useState(false);
  const [popUpRating, setPopUpRating] = React.useState(false);
  const [popUpConfirmCheckOut, setPopUpConfirmCheckOut] = React.useState(false);

  const { checked, setChecked } = React.useContext(LocationContext);

  const checkIn = () => {
    console.log(props.match.params.id);
    setChecked(props.match.params.id);
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

  const readMoreA = () => {
    setMoreTextA(!moreTextA);
  };
  const readMoreB = () => {
    setMoreTextB(!moreTextB);
  };
  const readMoreC = () => {
    setMoreTextC(!moreTextC);
  };
  const readMoreD = () => {
    setMoreTextD(!moreTextD);
  };
  const readMoreE = () => {
    setMoreTextE(!moreTextE);
  };
  useEffect(() => {
    ApiLocations.map((apiLocation) => {
      if (apiLocation.id == props.match.params.id) {
        setLocation(apiLocation);
      }
    });
  }, []);

  return (
    <div>
      <div className="location-carousel">
        <LocationCarousel />
      </div>

      {checked !== props.match.params.id ? (
        <div className="details_checkin">
          <div className="all-info">
            {/* <a href={`/locations/`}>Back</a> */}
            <div>
              <div className="info-location">
                <h1 className="location-details-name">{location.name}</h1>

                {popUpAlreadyChecked ? (
                  <PopUpAlreadyChecked toggle={togglePopUpAlreadyChecked} />
                ) : null}
                <div style={{ display: "flex" }}>
                  <img
                    style={{
                      height: "15px",
                      width: "15px",
                      paddingRight: "5px",
                    }}
                    src={member}
                    alt="members"
                  />
                  <p style={{ fontSize: "15px" }}>1 member here</p>
                </div>
                <div style={{ display: "flex" }}>
                  <img
                    style={{
                      height: "15px",
                      width: "15px",
                      paddingTop: "12px",
                      paddingRight: "5px",
                    }}
                    src={time}
                    alt="time"
                  />
                  <div style={{ fontSize: "15px", paddingTop: "10px" }}>
                    09:00 - 17:00{" "}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    paddingTop: "10px",
                    paddingBottom: "15px",
                  }}
                >
                  {" "}
                  Sintra |{" "}
                  <a
                    href="https://google.com"
                    style={{ textDecoration: "underline", fontSize: "12px" }}
                  >
                    Get Directions{" "}
                  </a>{" "}
                </div>
                <LocationsRating
                  rating={location.rating}
                  lat={location.lat}
                  lng={location.lng}
                />
              </div>
              <div className="description">
                <h2 style={{ paddingBottom: "30px" }}>Description</h2>
                <p>{location.description}</p>
                <div
                  style={{ fontWeight: "bold", paddingBottom: "30px" }}
                  onClick={readMoreA}
                >
                  {moreTextA ? <p>{location.description}</p> : null}
                  <p>Read More...</p>
                </div>

                <hr className="separator"></hr>
                <div className="details-separator">
                  <h2
                    style={{
                      paddingBottom: "12px",
                      paddingTop: "12px",
                    }}
                  >
                    Facilidades
                  </h2>
                  <img
                    onClick={readMoreB}
                    src={arrow}
                    className="arrow-style"
                  />
                  {moreTextB ? <p>{location.facilidades} </p> : null}
                </div>

                <hr className="separator"></hr>
                <div className="details-separator">
                  <h2
                    style={{
                      paddingBottom: "12px",
                      paddingTop: "12px",
                    }}
                  >
                    Important Information
                  </h2>
                  <img
                    onClick={readMoreC}
                    src={arrow}
                    className="arrow-style-info"
                  />
                  {moreTextC ? <p>{location.information} </p> : null}
                </div>

                <div>
                  <hr className="separator"></hr>
                  <h2
                    style={{
                      paddingBottom: "12px",
                      paddingTop: "12px",
                    }}
                  >
                    Beneficios Exclusivos
                  </h2>
                  <img
                    onClick={readMoreD}
                    src={arrow}
                    className="arrow-style"
                  />
                  {moreTextD ? <p>{location.beneficios} </p> : null}
                </div>
                <div>
                  <hr className="separator"></hr>
                  <h2
                    style={{
                      paddingBottom: "12px",
                      paddingTop: "12px",
                    }}
                  >
                    Horarios Krow
                  </h2>
                  <img
                    onClick={readMoreE}
                    src={arrow}
                    className="arrow-style"
                  />
                  {moreTextE ? <p>{location.horarios}</p> : null}
                </div>

                <div>
                  <hr className="separator"></hr>
                  <h2
                    style={{
                      paddingBottom: "22px",
                      paddingTop: "12px",
                    }}
                  >
                    About this location
                  </h2>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "20px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <img
                        style={{
                          height: "24px",
                          width: "24px",
                          paddingBottom: "10px",
                          paddingRight: "5px",
                        }}
                        src={phone}
                        alt="phone"
                      />
                      <p style={{ color: "#4285f4" }}>217266632</p>
                    </div>
                    <div style={{ display: "flex", paddingLeft: "30px" }}>
                      <img
                        style={{
                          height: "24px",
                          width: "24px",
                          paddingBottom: "10px",
                          paddingRight: "5px",
                        }}
                        src={website}
                        alt="website"
                      />
                      <a style={{ color: "#4285f4" }} href="https://google.com">
                        Visitar Website
                      </a>
                    </div>
                  </div>
                  <div>
                    <LocationMap
                      id={props.match.params.id}
                      location={location}
                    />
                  </div>

                  <div className="button-container">
                    <button
                      className="button-checkin"
                      // onClick={checked === null ? checkIn : message}
                    >
                      Check In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="details_checkout">
          <div className="all-info">
            <h1 className="location-details-name">{location.name}</h1>
            {popUpCheckIn ? <PopUpCheckIn toggle={togglePopUpCheckIn} /> : null}

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

            <div style={{ display: "flex" }}>
              <img
                style={{
                  height: "15px",
                  width: "15px",
                  paddingRight: "5px",
                }}
                src={member}
                alt="members"
              />
              <p style={{ fontSize: "15px" }}>1 member here</p>
            </div>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  height: "15px",
                  width: "15px",
                  paddingTop: "12px",
                  paddingRight: "5px",
                }}
                src={time}
                alt="time"
              />
              <div style={{ fontSize: "15px", paddingTop: "10px" }}>
                09:00 - 17:00{" "}
              </div>
            </div>
            <div
              style={{
                fontSize: "15px",
                paddingTop: "10px",
                paddingBottom: "15px",
              }}
            >
              {" "}
              Sintra |{" "}
              <a
                href="https://google.com"
                style={{ textDecoration: "underline", fontSize: "12px" }}
              >
                Get Directions{" "}
              </a>{" "}
            </div>
            <LocationsRating
              rating={location.rating}
              lat={location.lat}
              lng={location.lng}
            />

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
          </div>
          <div className="checked-description">
            <div>
              <h2>Description</h2>
              <div
                style={{ fontWeight: "bold", paddingBottom: "30px" }}
                onClick={readMoreA}
              >
                {moreTextA ? <p>{location.description}</p> : null}
                <p>Read More...</p>
              </div>
              <div>
                <h2>Facilidades</h2>
                <button onClick={readMoreB}>more</button>
                {moreTextB ? <p>{location.facilidades} </p> : null}
              </div>
              <div>
                <h2>Informacoes Importantes</h2>
                <button onClick={readMoreC}>more</button>
                {moreTextC ? <p>{location.information} </p> : null}
              </div>
              <div>
                <h2>Beneficios Exclusivos</h2>
                <button onClick={readMoreD}>more</button>
                {moreTextD ? <p>{location.beneficios} </p> : null}
              </div>
              <div>
                <h2>Horarios</h2>
                <button onClick={readMoreE}>more</button>
                {moreTextE ? <p>{location.horarios}</p> : null}
              </div>

              <div>
                <h1>Sobre esta localizacao</h1>
                <div
                  style={{
                    display: "flex",
                    padding: "20px",
                    flexDirection: "row",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      style={{
                        height: "24px",
                        width: "24px",
                        paddingBottom: "10px",
                        paddingRight: "5px",
                      }}
                      src={phone}
                      alt="phone"
                    />
                    <p style={{ color: "white" }}>+4876557755</p>
                  </div>
                  <div style={{ display: "flex", paddingLeft: "30px" }}>
                    <img
                      style={{
                        height: "24px",
                        width: "24px",
                        paddingBottom: "10px",
                        paddingRight: "5px",
                      }}
                      src={website}
                      alt="website"
                    />
                    <a style={{ color: "white" }} href="https://google.com">
                      Visitar Website
                    </a>
                  </div>
                </div>
                <div>
                  <LocationMap location={location} id={props.match.params.id} />
                </div>
                <div className="button-container">
                  <button className="button-checkout" onClick={checkOut}>
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationDetails;
