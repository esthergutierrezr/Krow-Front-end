import React, { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ArrowLeft from "../Style/SVG/Profile/SVG_Screen Perfil-06_seta branca-01.svg";
import { ArrowBlue, Logo, ForgetDiv, SendEmailPass } from "../Profile/Styles";
import KrowLg from "../Style/SVG/KrowLogo.svg";
import "./Login.css";

const ResetPassword = () => {
  const { user } = useContext(AuthContext);
  const id = Number(user.id);
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm({});

  // emailRecipient

  const onSubmit = (data) => {
    console.log("data: ", data);
    axios
      .post("/password/reset", {
        emailRecipient: data.email,
      })
      .then(async (response) => {
        console.log("response: ", response);
        history.push("/auth/login");
      })
      .catch((error) => console.error(error));
    alert("A new Password has been send to your Email");
  };

  return (
    <div className="bg">
      <div>
        <Link to="/auth/login">
          <ArrowBlue src={ArrowLeft} alt="arrow-back" />
        </Link>
      </div>
      <Logo src={KrowLg} alt="Krow-logo" />
      <br />
      <ForgetDiv onSubmit={handleSubmit(onSubmit)}>
        <h1>Forget your Password?</h1>
        <p>Enter your associated email to your Krow account</p>
        <input
          name="email"
          type="email"
          placeholder="Email*"
          ref={register({
            required: true,
          })}
        />
        <SendEmailPass type="submit">Send Replacement Password</SendEmailPass>
      </ForgetDiv>
    </div>
  );
};
export default ResetPassword;
