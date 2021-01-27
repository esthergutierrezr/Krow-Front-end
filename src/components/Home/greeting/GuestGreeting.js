import React from 'react';
import { Link } from "react-router-dom";

function GuestGreeting() {

  // Some endpoints don't exist yet --> register

  return (
    <div className="greeting-container">
      <span> 
        <Link to="/signup">Sign Up</Link>
        {' | '}
        <Link to="/login">Log in</Link>
      </span>
      <Link to="/login"><img className="profile-picture" src="https://via.placeholder.com/150" alt="" /></Link>
    </div>
  );
}

export default GuestGreeting;