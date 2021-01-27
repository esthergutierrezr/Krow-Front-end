import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const { register, errors, handleSubmit } = useForm();
  const [userInfo, setUserInfo] = useState({});
  const history = useHistory();

  const onSubmit = (userInfo) => {
    console.log(userInfo);
    axios
      .post("/auth/signup", userInfo)
      .then((response) => {
        alert("User has been signed up successfully");
        // console.log(response);
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
            type="email"
            name="email"
            placeholder={
              !errors.email ? "Your email is required to log-in later" : "email"
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
                : "repeat password"
            }
            ref={register({
              minLength: 8,
              required: true,
              pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i,
            })}
            onChange={handleChange}
          />
          <p>Country Code</p>
          <input
            type="number"
            name="phoneNumber"
            placeholder={
              !errors.phoneNumber ? "Phone Number is required" : "Phone Number"
            }
            ref={register({ required: true, maxLength: 9 })}
            onChange={handleChange}
          />
          <input
            type="text"
            name="fullName"
            placeholder={
              !errors.fullName ? "Full Name is required" : "Full Name"
            }
            ref={register({ required: true, maxLength: 30 })}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
export default Signup;
