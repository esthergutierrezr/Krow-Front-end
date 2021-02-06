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
  const [new_password, setPassword] = useState({});

  const [fields, handleFieldChange] = useState({
    password: "",
    oldPassword: user.password,
    // confirmPassword: "",
  });
  const id = Number(user.id);
  const history = useHistory();


  // const handleChange = (event) => {
  //   setPassword({ [event.target.name]: event.target.value });
  // };

const handleFieldChange =(event)=>{
  newPassword = fields.password
  setPassword({ [event.target.name]: event.target.value})
}

  // const changePassword = (e) => {
  //   console.log("newPassword", newPassword);
  //   e.preventDefault();
  //   setUser({ password: newPassword });
  // };

  const handleSubmit = () => {
    axios
      .post("/password/change", newPassword)
      .then((response) => {
        // console.log("response",response);
      })
      .catch((error) => console.error(error));
    alert("Password has been Changed Successfully");
    history.push(`/profile/${id}`);
  };

  return (
    <div className="bg-white-profile">
      <Content>
        <UserChange />
        <DivEdit>
          <FormChange
            onSubmit={(e) => {
              changePassword(e);
            }}
          >
            <h1>Password</h1>
            {/* <form
            onSubmit={(e) => {
              UpdatePassword(e);
            }}> */}
            <input
              // onChange={handleFieldChange}
              onChange={handleChange}
              type="password"
              name="oldPassword"
              placeholder="Old Password"
              value={fields.oldPassword}
            />
            <br />
            <input
              // onChange={handleFieldChange}
              onChange={handleChange}
              name="newPassword"
              type="password"
              placeholder="New Password"
              value={fields.password}
            />
            <br />
            {/* <input
            onChange={handleFieldChange}
              // onChange={handleChange} check password
              type="password"
              placeholder="Confirm New Password"
              value={fields.confirmPassword}
            />
            <br /> */}
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
