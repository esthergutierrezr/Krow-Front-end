import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import {UserContext} from '../../../contexts/UserContext'

function UserGreeting() {
  const {firstName, lastName, isMember, image, toggleIsMember} = useContext(UserContext)

  const initialGreeting = `Hi, ${firstName} ${lastName}`;

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
      <Link to="/profile"><img className="profile-picture" src={image} alt={firstName} /></Link>
    </div>
  );
}

export default UserGreeting;