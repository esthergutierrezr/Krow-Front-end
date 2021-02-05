import React, {useState, useEffect} from 'react';
import './StarRating.css';
import axios from 'axios';

function StarRating(props) {

  const  user_id = 3;             // Will come from UserContext later
  const { location_id } = props    // locationId will have to be passed down by parent.

  
  // colors all stars on the left of the hovered stars and the hovered star itself.
  const [ratingOnHover, setRatingOnHover] = useState(null);
  const [isRatingsModalDisplayed, setisRatingsModalDisplayed] = useState(false);
  const handleHover = (starValue) => {
    const hoverRating = (starValue);
    setRatingOnHover(hoverRating)
  } 

  // When start is clicked, the rating gets added to the rating table in the backend. Results logged to console for now.
  const handleClick = (rating) => {
    axios.post(`/locations/${location_id}/rating`, {rating, user_id, location_id})
    .then(response =>  setisRatingsModalDisplayed(false))
    
  }

  // On render, the average rating for the current location wil be fetched. Results logged to console for now.
  useEffect(() => {
    axios.get(`/locations/${location_id}/average-rating`, {user_id})
    .then(response => console.log("get average rating: ", response))
  }, [])

  return (
    <React.Fragment>
      {isRatingsModalDisplayed 
      ?
        <div className="rating">
          <span onMouseEnter={()=>handleHover(1)} onClick={()=>handleClick(1)} onMouseLeave={()=>setRatingOnHover(null)} className={`fa star fa-star${ratingOnHover != null?'':'-o'}`} />
          <span onMouseEnter={()=>handleHover(2)} onClick={()=>handleClick(2)} onMouseLeave={()=>setRatingOnHover(null)} className={`fa star fa-star${ratingOnHover > 1?'':'-o'}`} />
          <span onMouseEnter={()=>handleHover(3)} onClick={()=>handleClick(3)} onMouseLeave={()=>setRatingOnHover(null)} className={`fa star fa-star${ratingOnHover > 2?'':'-o'}`} />
          <span onMouseEnter={()=>handleHover(4)} onClick={()=>handleClick(4)} onMouseLeave={()=>setRatingOnHover(null)} className={`fa star fa-star${ratingOnHover > 3?'':'-o'}`} />
          <span onMouseEnter={()=>handleHover(5)} onClick={()=>handleClick(5)} onMouseLeave={()=>setRatingOnHover(null)} className={`fa star fa-star${ratingOnHover > 4?'':'-o'}`} />
          <span className="">{` ${ratingOnHover != null? ratingOnHover: "" }`}</span>
        </div>
      : 
        <button onClick={()=> setisRatingsModalDisplayed(true) } > Checkout </button>
        }
    </React.Fragment>
  
  );
}

export default StarRating;