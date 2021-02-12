import React from "react";
import "./PopUpA.css";

export default function PopUpConfirmCheckOut(props) {
  return (
    <div className="PopUp">
      <div className="popup_inner">
        <div onClick={props.cancel} className="exit-button">
          <p style={{ padding: "12px", fontSize: "20px" }}>x</p>
        </div>

        <p
          style={{
            fontSize: "20.7px",
            fontWeight: "bold",
            paddingBottom: "20px",
            color: "white",
            fontFamily: "Raleway",
          }}
        >
          Confirm the Check-Out
        </p>
        <p
          style={{
            fontSize: "13px",

            paddingBottom: "1px",
            color: "white",
            fontFamily: "Raleway",
          }}
        >
          Para continuar, prima OK.
        </p>
        <p
          style={{
            fontSize: "13px",
            paddingBottom: "10px",
            color: "white",
            fontFamily: "Raleway",
          }}
        >
          Para cancelar, feche esta janela.{" "}
        </p>
        <button className="button-popup" onClick={props.toggle}>
          OK
        </button>
      </div>
    </div>
  );
}
