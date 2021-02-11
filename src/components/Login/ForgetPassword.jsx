import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ArrowLeft from "../Style/SVG/Profile/SVG_Screen Perfil-06_seta branca-01.svg";
import { ArrowBlue, Logo } from "../Profile/Styles";
import { ForgetForm, SendEmailPass } from "./StyleLogin";
import KrowLg from "../Style/SVG/KrowLogo.svg";
import "./Login.css";

const ResetPassword = () => {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation(["login"]);
  const id = Number(user.id);
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm({});

  // emailRecipient

  const onSubmit = (data) => {
    axios
      .post("/password/reset", {
        emailRecipient: data.email,
      })
      .then(async (response) => {
        history.push("/auth/login");
      })
      .catch((error) => console.error(error));
    alert("A new Password has been send to your Email");
  };

  return (
    <div className="bg">
      <div>
        <Link to="/auth/signup">
          <ArrowBlue src={ArrowLeft} alt="arrow-back" />
        </Link>
      </div>
      <Logo src={KrowLg} alt="Krow-logo" />
      <br />
      <ForgetForm onSubmit={handleSubmit(onSubmit)}>
        <h1>{t("login:forgetPassword.forget")}</h1>
        <p>{t("login:forgetPassword.enterEmail")}</p>
        <input
          name="email"
          type="email"
          placeholder="Email*"
          ref={register({
            required: true,
          })}
        />
        <SendEmailPass type="submit">{t("login:forgetPassword.sendReplacement")}</SendEmailPass>
      </ForgetForm>
    </div>
  );
};
export default ResetPassword;
