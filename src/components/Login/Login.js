/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import KrowLogo from "../Style/SVG/KrowLogo.svg";
import {
  LoginForm,
  Logo,
  Container,
  LoginText,
  RegisterLink,
  PasswordLink,
  GuestLink,
} from "./StyleLogin";

function Login() {
  const [state, setState] = useState({});
  const { setUser, setAuth } = useContext(AuthContext);
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    axios
      .post("/auth/login", { email: data.email, password: data.password })
      .then((response) => {
        setUser(response.data.foundUser);
        setAuth(true);
        Cookies.set("authToken", response.data.token);
        history.push("/");
      });
  };

  const resetSession = () => {
    window.location.href = "/";
  };

  return (
    <div className="bg">
      <Logo src={KrowLogo} alt="Krow-logo" />
      <Container>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Email*"
            type="email"
            name="email"
            value={state.email}
            ref={register({
              required: true,
            })}
          />
          {errors.email && <p>Required Email</p>}
          <br />
          <input
            placeholder="Password*"
            name="password"
            type="password"
            value={state.password}
            ref={register({
              required: true,
              minLength: 8,
              pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i,
            })}
          />
          {errors.password && <p>Password must have at least 8 characters</p>}
          <br />
          <button type="submit">Login</button>
          <br />
          <br />
          <LoginText>
            <p>Not a Member yet?</p>
            <Link to="/auth/signup">
              <RegisterLink>Please register</RegisterLink>
            </Link>
            <br />
            <Link to="/password/forget">
              <PasswordLink>
                Forget your Password
                <hr />
              </PasswordLink>
            </Link>
            <br />
            <div onClick={() => resetSession()} to="/">
              <GuestLink>Continue as Guest</GuestLink>
            </div>
          </LoginText>
          <br />
        </LoginForm>
      </Container>
    </div>
  );
}
export default Login;
