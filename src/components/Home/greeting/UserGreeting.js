import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import {UserContext} from '../../../contexts/UserContext'

function UserGreeting() {
  const {fullName} = useContext(UserContext)

  const initialGreeting = `Hi, ${fullName}`;

  return (
    <div className="greeting-container">
      <span>
        {initialGreeting}
        <br />
        {isMember
          ? "active membership!"
          : (<span> 
              No active membership 
              <br /> 
              <Link to="membership">Click here to buy a plan</Link> 
            </span>)
        }
      </span>
      <Link to="/profile"><img className="profile-picture" src={image} alt={fullName} /></Link>
    </div>
  );
}

export default UserGreeting;