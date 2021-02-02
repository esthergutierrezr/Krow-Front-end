import React from 'react';
import { Link } from "react-router-dom";
import ProfilePicture from "../../Style/SVG/HomePage/SVG_Screen Registar-01.svg"

function GuestGreeting() {

  // Some endpoints don't exist yet --> register

  return (
    <div className="greeting-container">
      <span> 
        <Link className="register" to="/auth/signup">Sign Up</Link>
        {' | '}
        <Link  to="/auth/login"className="yellow-bg">Log in</Link>
      </span>
      <Link to="/auth/login"><img className="profile-picture" src={ProfilePicture} alt="" /></Link>
    </div>
  );
}

export default GuestGreeting;