import React from 'react';

function FeaturedLocationsRating(props) {
  const {rating} = props;
//  console.log("rating: ",rating);


  return (
    <div className="featured-locations-card__rating">

      {/* <span className={`'fa star fa-star'${(rating >= .5 && rating < 1)? "-half-o ":(rating < 1? "-o":" ")}`} /> */}
      <span className={`fa star fa-star`} />
      <span className={`fa star fa-star${(rating > 1 && rating < 2)? "-half-o ":(rating < 2? "-o":" ")}`} />
      <span className={`fa star fa-star${(rating > 2 && rating < 3)? "-half-o ":(rating < 3? "-o":" ")}`} />
      <span className={`fa star fa-star${(rating > 3 && rating < 4)? "-half-o ":(rating < 4? "-o":" ")}`} />
      <span className={`fa star fa-star${(rating > 4 && rating < 5)? "-half-o ":(rating < 5? "-o":" ")}`} />

      <span className="carousel-card__location-rating">{` ${rating}`}</span>
    </div>
  );
}

export default FeaturedLocationsRating;