import React from 'react';
import { Link } from "react-router-dom";

function UserGreeting(props) {
  const {membership, img, firstName, lastName} = props;

  const initialGreeting = `Hi, ${firstName} ${lastName}`;

  return (
    <div className="greeting-container">
      <span>
        {initialGreeting}
        <br />
        {membership
          ? membership
          : (<span> 
              No active membership 
              <br /> 
              <Link to="membership">Click here to buy a plan</Link> 
            </span>)
        }
      </span>
      <Link to="/profile"><img className="profile-picture" src={img} alt={firstName} /></Link>
    </div>
  );
}

export default UserGreeting;