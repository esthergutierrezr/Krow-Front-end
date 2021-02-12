/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import Cookies from "js-cookie";
import { AuthContext } from "../../contexts/AuthContext";
import "react-phone-input-2/lib/style.css";
import "./Signup.css";
import KrowLogo from "../Style/SVG/KrowLogo.svg";
import {
  Logo,
  Register,
  FormSignUp,
  ContainerSignUp,
  LoginText,
  RegisterLink,
  GuestLink,
} from "./SignUpStyle";
// import { LaptopBg } from "../Style/Backgrounds";

function Signup() {
  const { t } = useTranslation(["signup"]);
  const { register, errors, handleSubmit } = useForm();
  const { user, setUser, setAuth } = useContext(AuthContext);
  const history = useHistory();
  const [state, setState] = useState({
    phone: "",
  });
  const [language, setLanguage] = useState("");

  const getLanguage = () => {
    setLanguage(user.language || localStorage.getItem("i18nextLng"));
  };

  useEffect(() => {
    getLanguage();
  }, []);

  const resetSession = () => {
    window.location.href = "/";
  };

  const onSubmit = (data) => {
    // console.log("data: ", data);
    data = { ...data, language };
    axios
      .post("/auth/signup", data)
      .then(() => {
        const loginInfo = { email: data.email, password: data.password };
        axios.post("/auth/login", loginInfo).then((response) => {
          // console.log(loginInfo);
          // console.log("on login: ", response);
          setUser(response.data.foundUser);
          setAuth(true);
          Cookies.set("authToken", response.data.token);
          history.push("/");
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg">
      <Logo src={KrowLogo} alt="Krow-logo" />
      <ContainerSignUp>
        <FormSignUp onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            ref={register({ required: true })}
          />
          {errors.email && <p>{t("signup:signup.EmailReq")}</p>}
          <br />
          <PhoneInput
            inputStyle={{
              backgroundColor: "#323232",
              border: "none",
              color: "#898884",
              borderRadius: "8px",
              opacity: ".9",
              width: "305px",
              height: "54.2px",
              marginTop: "24.8px",
            }}
            buttonStyle={{
              backgroundColor: "#323232",
              border: "none",
              color: "#898884",
              borderRadius: "8px",
              opacity: ".9",
              zIndex: "1",
              position: "relative",
              marginTop: "-27px",
            }}
            dropdownStyle={{
              backgroundColor: "#323232",
              border: "none",
              color: "#898884",
              zIndex: "-1",
              position: "relative",
            }}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            value={state.phone}
            onChange={(phone) => setState({ phone })}
            type="tel"
            country="pt"
            name="phone"
            placeholder={`${t("signup:signup.PhoneNumber")}*`}
          />

          <input
            className="hidden"
            value={state.phone}
            type="tel"
            name="phoneNumber"
            placeholder={`${t("signup:signup.PhoneNumber")}*`}
            ref={register({ required: true, maxLength: 80 })}
          />
          <br />
          <br />
          {errors.phoneNumber && (
            <>
              {" "}
              <br />
              <p>{t("signup:signup.PhoneNumberReq")}</p>
            </>
          )}
          <input
            type="text"
            name="fullName"
            placeholder={`${t("signup:signup.FullName")}*`}
            ref={register({ required: true, maxLength: 30 })}
          />
          {errors.fullName && <p>{t("signup:signup.FullNameReq")}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password*"
            ref={register({
              minLength: 8,
              required: true,
              pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i,
            })}
          />
          {errors.password && <p>{t("signup:signup.CreatePasswordReq")}</p>}
          <br />
          <Register type="submit">{t("signup:signup.Register")}</Register>
          <br />
          <LoginText>
            <p>{t("signup:signup.AlreadyMember")}</p>
            <Link to="/auth/login">
              <RegisterLink>{t("signup:signup.Login")}</RegisterLink>
            </Link>
            <br />
            <div onClick={() => resetSession()} to="/">
              <GuestLink>{t("signup:signup.Guest")}</GuestLink>
            </div>
          </LoginText>
        </FormSignUp>
      </ContainerSignUp>
    </div>
  );
}

export default Signup;
