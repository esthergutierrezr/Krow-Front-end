import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./signup.css";

function Signup() {
  const { register, errors, handleSubmit } = useForm();
  const [userInfo, setUserInfo] = useState({});
  const history = useHistory();

  const onSubmit = (userInfo, data) => {
    console.log("data: ",data);
    axios
      .post("/auth/signup", userInfo)
      .then((response) => {
        alert("User has been signed up successfully");
        console.log(response);
        history.push("/login");
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    // console.log(event.target.name, event.target.value);
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
            onChange={handleChange}
          />
          {/* <PhoneInput
            country={"pt"}
            name ="phone"
            // onChange={phone => setState({ phone })}
          /> */}
          <input
            type="email"
            name="email"
            placeholder={
              !errors.email ? "email" : "Your email is required to login later"
            }
            ref={register({ required: true, maxLength: 80 })}
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
export default Signup;
