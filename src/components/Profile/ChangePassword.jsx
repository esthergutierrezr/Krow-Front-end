import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ChangePassword = () => {
  const { user, setUser } = useContext(AuthContext);
  const id = Number(user.id);
  // const handleSubmit = () => {
  //   axios
  //     .post(`/profile/${id}`, newPassword)
  //     .then((response) => {
  //       // console.log("response",response);
  //       alert("User has been successfully updated");
  //       history.push(`/profile/${id}`);
  //     })
  //     .catch((error) => console.error(error));
  // };

  return (
    <div className="bg-white-profile">
      <h1>Change Password</h1>
      <p>{user.fullName}</p>
      <div>
        {/* <form onSubmit={handleChangeClick}> */}
        <form>
          <label id="oldPassword">
            <br />
            <input type="password" placeholder="Old Password" />
          </label>
          <br />
          <br />
          <label id="password">
            <input type="password" placeholder="New Password" />
          </label>
          <br />
          <br />
          <label id="confirmPassword">
            <input type="password" placeholder="Confirm New Password" />
          </label>
          <br />
          <br />
          <Link to="/password/reset">
            <p>Forget Password</p>
          </Link>
          <br />
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
