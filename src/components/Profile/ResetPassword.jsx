import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Cookies from "js-cookie";
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
  const { t } = useTranslation(["profile"]);
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log("data: ", data);
    axios
      .post("/password/reset", {
        emailRecipient: data.email,
      })
      .then(async (response) => {
        console.log("response: ", response);
        Cookies.remove("authToken");
        history.push("/auth/login");
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
        <h1>{t("profile:resetPassword.forget")}</h1>
        <p>
        {t("profile:resetPassword.insertEmail")}
        </p>
        <input
          name="email"
          type="email"
          placeholder="Email*"
          ref={register({
            required: true,
          })}
          value={user.email}
        />
        <SendEmail type="submit">{t("profile:resetPassword.replacement")}</SendEmail>
      </ResetDiv>
    </div>
  );
};
export default ResetPassword;
