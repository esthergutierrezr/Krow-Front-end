import React, { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ArrowLeft from "../Style/SVG/Profile/SVG_Screen Perfil-06_seta azul-01.svg";
import "./profile.css";
import { ArrowBlue, Logo, ResetDiv, SendEmail } from "./Styles";
import KrowLogo from "../Style/SVG/Profile/SVG_Screen Equeceu-se da password_logo krow-01.svg";

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
        history.push(`/profile/${id}`);
      })
      .catch((error) => console.error(error));
    alert("A new Password has been send to your Email");
  };

  return (
    <div className="bg-white-profile">
      <div>
        <Link to={`/profile/${id}`}>
          <ArrowBlue src={ArrowLeft} alt="arrow-back" />
        </Link>
      </div>
      <Logo src={KrowLogo} alt="Krow-logo" />
      <br />
      <ResetDiv onSubmit={handleSubmit(onSubmit)}>
        <h1>Forget your Password?</h1>
        <p>Confirm your associated email to your Krow account. If not use Support Chat.</p>
        <input
          name="email"
          type="email"
          placeholder="Email*"
          ref={register({
            required: true,
          })}
          value={user.email}
        />
        <SendEmail type="submit">Send Replacement Password</SendEmail>
      </ResetDiv>
    </div>
  );
};
export default ResetPassword;
