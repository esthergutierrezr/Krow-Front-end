import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import KrowLogo from "../Style/SVG/KrowLogo.svg";

const Logo = styled.img`
  height: 78.3px;
  width: 163px;
  margin-top: 83px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

function Login() {
  const [state, setState] = useState({});
  const { setUser, setAuth } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/auth/login", state).then((response) => {
      setUser(response.data.foundUser);
      setAuth(true);
      Cookies.set("authToken", response.data.token);
      history.push("/");
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="bg">
      <Logo src={KrowLogo} alt="Krow-logo" />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <p>Email</p>
          <input name="email" value={state.email} onChange={handleChange} />
          <br />
          <p>Password</p>
          <input
            name="password"
            type="password"
            value={state.password}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
