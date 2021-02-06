import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Content } from "./Styles";

const ChangePassword = () => {
  const { user, setUser } = useContext(AuthContext);
  const id = Number(user.id);
  const history = useHistory();


  // const handleSubmit = () => {
  //   axios
  //     .post(`/password/change`, newPassword)
  //     .then((response) => {
  //       // console.log("response",response);
  //     })
  //     .catch((error) => console.error(error));
  //       alert("Password has been Changed Successfully");
  //       history.push(`/profile/${id}`);
  // };

  return (
    <Content>
      <div className="bg-white-profile">
        <h1>Change Password</h1>
        <p>{user.fullName}</p>
        <div>
          {/* <form
            onSubmit={(e) => {
              UpdatePassword(e);
            }}> */}
          <form>
            <input type="password" placeholder="Old Password" />

            <br />

            <input 
            // onChange={handleChange} change password
            type="password" placeholder="New Password" />

            <br />

            <input 
            // onChange={handleChange} check password
            type="password" placeholder="Confirm New Password" />

            <br />
            <Link to="/password/reset">
              <p>Forget Password</p>
            </Link>
            <br />
            <button type="submit"
            // onClick={() => handleSubmit()}
            >Change Password</button>
          </form>
        </div>
      </div>
    </Content>
  );
};

export default ChangePassword;
