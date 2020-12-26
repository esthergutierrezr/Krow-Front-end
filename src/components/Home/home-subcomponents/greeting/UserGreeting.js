import React from 'react';
import { Link } from "react-router-dom";

function UserGreeting(props) {
  const {membership, firstName, lastName} = props;

  const initialGreeting = `Hi, ${firstName} ${lastName}`;

  return (
    <div>
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
      <Link to="/profile"><img className="profile-picture" src="https://via.placeholder.com/150" alt={firstName} /></Link>
    </div>
  );
}

export default UserGreeting;