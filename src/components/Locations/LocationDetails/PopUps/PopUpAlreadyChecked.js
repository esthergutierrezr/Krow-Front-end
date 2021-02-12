import React from "react";
import "./PopUpA.css";

export default function PopUpAlreadyChecked(props) {
  return (
    <div className="PopUp">
      <div className="popup_inner">
        <p
          style={{
            fontSize: "20.7px",
            fontWeight: "bold",
            paddingBottom: "20px",
            color: "white",
            fontFamily: "Raleway",
          }}
        >
          Check-In Active
        </p>
        <p
          style={{
            fontSize: "15px",
            paddingBottom: "10px",
            color: "white",
            fontFamily: "Raleway",
          }}
        >
          Para fazer check-in aqui, precisa fazer check-out primeiro{" "}
        </p>
        <button className="button-popup" onClick={props.toggle}>
          OK
        </button>
      </div>
    </div>
  );
}
