import React from "react";
import "./PopUpA.css";

export default function PopUpC(props) {
  return (
    <div className="PopUp">
      <div className=".popup_inner">
        <div onClick={props.cancel}>x</div>
        <p>AVALIDE A EXPERENCIA</p>
        <p>****** </p>
        <button onClick={props.toggle}>Submeter</button>
      </div>
    </div>
  );
}
