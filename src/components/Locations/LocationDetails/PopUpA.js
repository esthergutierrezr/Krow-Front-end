import React from "react";
import "./PopUpA.css";

export default function PopUp(props) {
  return (
    <div className="PopUp">
      <div className=".popup_inner">
        <p>CHECK-IN ACTIVO</p>
        <p>Bom trabalho!</p>
        <button onClick={props.toggle}>OK</button>
      </div>
    </div>
  );
}
