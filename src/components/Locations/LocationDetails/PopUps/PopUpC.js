import React, { average } from "react";
import "./PopUpA.css";
import StarRatingComponent from "react-star-rating-component";

export default function PopUpC(props) {
  const [Ratings, setRatings] = React.useState([5, 6]);
  const [FinalRating, setFinalRating] = React.useState("");

  const changeRating = (newRating) => {
    setRatings(Ratings.concat(newRating));

    setFinalRating(Ratings.reduce((sum, curr) => sum + curr) / Ratings.length);
    //setFinalRating(average(Ratings));
  };

  return (
    <div className="PopUp">
      <div className=".popup_inner">
        <div onClick={props.cancel}>x</div>
        <p>AVALIDE A EXPERENCIA</p>

        <StarRatingComponent
          name="rate"
          starCount={5}
          //value={FinalRating}
          onStarClick={changeRating}
          starColor="#ffd700"
          emptyStarColor="gray"
        />
        <button className="button-popup" onClick={props.toggle}>
          Submeter
        </button>
      </div>
    </div>
  );
}
