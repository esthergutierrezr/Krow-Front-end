import React, { average } from "react";
import "./PopUpA.css";
import StarRatingComponent from "react-star-rating-component";

export default function PopUpRating(props) {
  const [Ratings, setRatings] = React.useState([5, 6]);
  const [FinalRating, setFinalRating] = React.useState("");

  const changeRating = (newRating) => {
    setRatings(Ratings.concat(newRating));

    setFinalRating(Ratings.reduce((sum, curr) => sum + curr) / Ratings.length);
    //setFinalRating(average(Ratings));
  };

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
          Rate your experience
        </p>
        <div style={{ paddingBottom: "20 px" }}>
          <StarRatingComponent
            name="rate"
            starCount={5}
            //value={FinalRating}
            onStarClick={changeRating}
            starColor="white"
            // emptyStarColor="gray"
            emptyIcon={true}
          />
        </div>
        <button className="button-popup" onClick={props.toggle}>
          Submeter
        </button>
      </div>
    </div>
  );
}
