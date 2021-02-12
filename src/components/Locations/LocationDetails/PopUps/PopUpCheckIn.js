import React from "react";
import "./PopUpA.css";

export default function PopUpCheckIn(props) {
  return (
    <div className="PopUp">
      <div className="popup_inner">
        <p
          style={{
            fontSize: "20.7px",
            fontWeight: "bold",
            paddingBottom: "20px",
          }}
        >
          Check-In Active
        </p>
        <p
          style={{
            paddingBottom: "10px",
          }}
        >
          Bom trabalho!
        </p>
        <button className="button-popup" onClick={props.toggle}>
          OK
        </button>
      </div>
    </div>
  );
}
