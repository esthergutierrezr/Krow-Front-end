import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ArrowLeft from "../Style/SVG/Profile/SVG_Screen Perfil-06_seta azul-01.svg";
import "./profile.css";
import { ArrowBlue, Logo } from "./Styles";
import KrowLogo from "../Style/SVG/Profile/SVG_Screen Equeceu-se da password_logo krow-01.svg";

const ResetPassword = () => {
  const { user } = useContext(AuthContext);
  const id = Number(user.id);

  return (
    <div className="bg-white-profile">
      <div>
        <Link to={`/profile/${id}`}>
          <ArrowBlue src={ArrowLeft} alt="arrow-back" />
        </Link>
      </div>
      <Logo src={KrowLogo} alt="Krow-logo" />
      LOGO
      <h1>Forget your Password?</h1>
      <p>Enter your associated email to your Krow account</p>
      <input type="email" placeholder="Email" />
    </div>
  );
};
export default ResetPassword;
