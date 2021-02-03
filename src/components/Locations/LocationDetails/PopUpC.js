import React from "react";
import "./PopUpA.css";
import StarRatings from "react-star-ratings";

export default function PopUpC(props) {
  return (
    <div className="PopUp">
      <div className=".popup_inner">
        <div onClick={props.cancel}>x</div>
        <p>AVALIDE A EXPERENCIA</p>
        <StarRatings
          rating={props.rating}
          starRatedColor="yellow"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
        />
        <button onClick={props.toggle}>Submeter</button>
      </div>
    </div>
  );
}
