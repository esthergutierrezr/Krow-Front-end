/* eslint-disable no-alert */
import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Content, DivEdit, FormChange, Save } from "./Styles";
import UserChange from "./UserChange";
import "./profile.css";

// body of backend current_password, new_password, user_id

const ChangePassword = () => {
  const { user, setUser } = useContext(AuthContext);
  // const [new_password, setPassword] = useState({});

  const [fields, setFieldChange] = useState({
    password: "",
    oldPassword: user.password,
    confirmPassword: "",
  });
  const id = Number(user.id);
  const history = useHistory();

  const handleChange = (event) => {
    setFieldChange({ [event.target.name]: event.target.value });
  };

  const changePassword = (event) => {
      event.preventDefault();
      setFieldChange({ oldPassword: event.target.value, confirmPassword: event.target.value });
    }

  const handleSubmit = (event) => {
    if (fields.password !== fields.confirmPassword){
      alert("The passwords doesn't match")
    }else{
      const currentPassword = fields.oldPassword;
      const newPassword = fields.confirmPassword;
      const userId = user.id;
      axios
         .post("/password/change", [currentPassword, newPassword, userId])
         .catch((error) => console.error(error)); // The form will submit
    }
    alert("Password has been Changed Successfully");
    history.push(`/profile/${id}`);
  };
  // const handleSubmit = () => {
  //   axios
  //     .post("/password/change", new_password)
  //     .then((response) => {
  //       // console.log("response",response);
  //     })
  //     .catch((error) => console.error(error));
  //   alert("Password has been Changed Successfully");
  //   history.push(`/profile/${id}`);
  // };

  return (
    <div className="bg-white-profile">
      <Content>
        <UserChange />
        <DivEdit>
          <FormChange
            onSubmit={(event) => {
              changePassword(event);
            }}
          >
            <h1>Password</h1>
            <input
              onChange={handleChange}
              type="password"
              name="oldPassword"
              placeholder="Old Password"
              value={fields.oldPassword}
            />
            <br />
            <input
              onChange={handleChange}
              name="newPassword"
              type="password"
              placeholder="New Password"
              value={fields.password}
            />
            <br />
            <input
              onChange={handleChange}
              type="password"
              placeholder="Confirm New Password"
              value={fields.confirmPassword}
            />
            <br />
            <Link to="/password/reset">
              <h2>Forget your Password?</h2>
            </Link>
            <br />
            <Save onClick={() => handleSubmit()} type="submit">
              Save Changes
            </Save>
          </FormChange>
        </DivEdit>
      </Content>
    </div>
  );
};

export default ChangePassword;
