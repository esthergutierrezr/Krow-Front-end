import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import Cookies from "js-cookie";
import { AuthContext } from '../../contexts/AuthContext';
import "react-phone-input-2/lib/style.css";
import "./Signup.css";

function Signup() {
  const { register, errors, handleSubmit } = useForm();
  const { setUser, setAuth } = useContext(AuthContext)
  const history = useHistory();
  const [state, setState] = useState({
    phone: "",
  })

  const onSubmit = (data) => {
    console.log("data: ",data);
    axios
      .post("/auth/signup", data)
      .then(() => {
        const loginInfo = {email: data.email, password: data.password}
        axios.post("/auth/login", loginInfo)
        .then((response) => {
          console.log(loginInfo);
          console.log("on login: ", response);
          setUser(response.data.foundUser);
          setAuth(true);
          Cookies.set("authToken", response.data.token);
          history.push("/");
        })
      }
      )
      .catch(error => console.error(error))
    };


  return (
    <div>
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="fullName"
            placeholder={
              !errors.fullName ? "Full Name is required" : "Full Name"
            }
            ref={register({ required: true, maxLength: 30 })}
          />
          <PhoneInput
            value={state.phone}
            onChange={phone => setState({ phone })}
            type="tel"
            country={"pt"}
            name="phone"
            placeholder={
              !errors.phone ? "phone number" : "Your phone number is required"
            }
          />
          <input
            className="hidden"
            value={state.phone}
            type="tel"
            name="phoneNumber"
            placeholder={
              !errors.phone ? "phone number" : "Your phone number is required"
            }
            ref={register({ required: true, maxLength: 80 })}
          />
          <input
            type="email"
            name="email"
            placeholder={
              !errors.email ? "email" : "Your email is required to login later"
            }
            ref={register({ required: true, maxLength: 80 })}
          />
          <input
            type="password"
            name="password"
            placeholder={
              !errors.password
                ? "Please enter your password"
                : "Password is required"
            }
            ref={register({
              minLength: 8,
              required: true,
              pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i,
            })}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
