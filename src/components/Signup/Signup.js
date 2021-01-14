import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup() {
  const [state, setState] = useState({});
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/auth/signup", state).then((response) => {
      alert("User has been signed up successfully");
      history.push("/login");
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <p>Signup</p>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input name="email" value={state.email} onChange={handleChange} />
        <br />
        <p>Country Code</p>
        <br />
        <p>Phone Number</p>
       <input name="phoneNumber" value={state.phoneNumber} onChange={handleChange} />
       <br />
       <p>Full Name</p>
       <input name="fullName" value={state.fullName} onChange={handleChange} />
       <br />
        <p>Password</p>
        <input name="password" value={state.password} onChange={handleChange} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Signup;
