import React from "react";
import "./PopUpA.css";

export default function PopUp(props) {
  return (
    <div className="PopUp">
      <div className=".popup_inner">
        <p>Check-In Active</p>
        <p>Bom trabalho!</p>
        <button className="button-popup" onClick={props.toggle}>
          OK
        </button>
      </div>
    </div>
  );
}
