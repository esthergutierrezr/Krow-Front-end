import React from "react";
import "./PopUpA.css";

export default function PopUpD(props) {
  return (
    <div className="PopUp">
      <div className=".popup_inner">
        <div onClick={props.cancel}>x</div>
        <p>Confirme o Check-Out</p>
        <p>Para continuar, prima OK. Para cancelar, feche esta janela. </p>
        <button onClick={props.toggle}>OK</button>
      </div>
    </div>
  );
}
