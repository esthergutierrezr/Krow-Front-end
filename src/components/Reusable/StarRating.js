import React, {useState, useEffect} from 'react';
import './StarRating.css';
import axios from 'axios';

function StarRating(props) {

  const  user_id = 2;       // Will come from context later
  // const  rating =  ;         // Will come from context later
  const  location_id = 24;  // Will come from context later

  const { locationId } = props
  const [ratingOnHover, setRatingOnHover] = useState(null);
  const [CurrentRatingValues, setCurrentRatingValues] = useState({});
  const [newRatingValues, setNewRatingValues] = useState({});
  

  const handleHover = (starValue) => {
    const hoverRating = (starValue);
    setRatingOnHover(hoverRating)
    console.log(hoverRating)
  } 

  const handleClick = (starValue) => {
    user_id, location_id, rating
    console.log(newRatingValues) 
    axios.post(`/locations/${location_id}rating`)
    .then(response => console.log(response))
  }

  useEffect(() => {
    axios.get(`/locations/${locationId}/average-rating`)
    .then(response => console.log("get rating: ", response))
  }, [])

  return (
    <div className="rating">
      <span onMouseEnter={()=>handleHover(1)} onClick={()=>handleClick(1)} onMouseLeave={()=>setRatingOnHover(null)} className={`fa star fa-star${ratingOnHover != null?'':'-o'}`} />
      <span onMouseEnter={()=>handleHover(2)} onClick={()=>handleClick(2)} onMouseLeave={()=>setRatingOnHover(null)} className={`fa star fa-star${ratingOnHover > 1?'':'-o'}`} />
      <span onMouseEnter={()=>handleHover(3)} onClick={()=>handleClick(3)} onMouseLeave={()=>setRatingOnHover(null)} className={`fa star fa-star${ratingOnHover > 2?'':'-o'}`} />
      <span onMouseEnter={()=>handleHover(4)} onClick={()=>handleClick(4)} onMouseLeave={()=>setRatingOnHover(null)} className={`fa star fa-star${ratingOnHover > 3?'':'-o'}`} />
      <span onMouseEnter={()=>handleHover(5)} onClick={()=>handleClick(5)} onMouseLeave={()=>setRatingOnHover(null)} className={`fa star fa-star${ratingOnHover > 4?'':'-o'}`} />
      <span className="">{` ${ratingOnHover != null? ratingOnHover: "" }`}</span>
    </div>
  );
}

export default StarRating;