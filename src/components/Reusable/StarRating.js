import React, {useState} from 'react';
import './StarRating.css';
import axios from 'axios';

function StarRating(props) {

  const [ratingOnHover, setRatingOnHover] = useState(null);
  const [newRatingValues, setNewRatingValues] = useState({});

  const handleHover = (starValue) => {
    const hoverRating = (starValue);
    setRatingOnHover(hoverRating)
    console.log(hoverRating)
  } 

  const handleClick = (starValue) => {
    setNewRatingValues({...newRatingValues, newAmountVotes: props.amountVotes + 1}) 
    setNewRatingValues({...newRatingValues, newRatingAVG: ((props.ratingAVG * props.amountVotes) + starValue) / props.amountVotes + 1}) 
    console.log(newRatingValues)
    axios.put("/locations/rating", newRatingValues)
    .then(response => console.log(response))
  }

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