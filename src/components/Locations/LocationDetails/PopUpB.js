import React from "react";
import "./PopUpA.css";

export default function PopUpB(props) {
  return (
    <div className="PopUp">
      <div className=".popup_inner">
        <p>CHECK-IN ACTIVO</p>
        <p>Para fazer check-in aqui, precisa fazer check-out primeiro </p>
        <button onClick={props.toggle}>OK</button>
      </div>
    </div>
  );
}
