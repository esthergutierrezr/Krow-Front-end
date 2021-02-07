import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProfilePicture from "../../Style/SVG/HomePage/SVG_Screen Registar-01.svg"

function GuestGreeting() {

  // Some endpoints don't exist yet --> register
  const { t } = useTranslation(["homepage"]);

  return (
    <div className="greeting-container">
      <span> 
        <Link className="register" to="/auth/signup">{t("homepage:guestGreeting.SignUp")}</Link>
        {' | '}
        <Link  to="/auth/login"className="yellow-bg">Login</Link>
      </span>
      <Link to="/auth/login"><img className="profile-picture" src={ProfilePicture} alt="" /></Link>
    </div>
  );
}

export default GuestGreeting;