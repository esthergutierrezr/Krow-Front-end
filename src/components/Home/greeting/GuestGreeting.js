import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function GuestGreeting() {

  const { t } = useTranslation(["homepage"]);

  return (
    <div className="greeting-container">
      <span> 
        <Link className="register raleway" to="/auth/signup">{t("homepage:guestGreeting.SignUp")}</Link>
        {' | '}
        <Link  to="/auth/login"className="yellow-bg">Login</Link>
      </span>
    </div>
  );
}

export default GuestGreeting;