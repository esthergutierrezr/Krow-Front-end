// change password
// old password
// new password
// confirm password
// forget password (different component????)
// insert email
// Button Send Reset Link
// (How generate a link to reset password)

import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function ChangePassword() {
  const user = useContext(AuthContext);
  const history = useHistory();
  const [fields, handleFieldChange] = useState({
    password: "",
    oldPassword: user.password,
    confirmPassword: "",
  });

  const [isChanging, setIsChanging] = useState(false);

  // function validateForm() {
  //   return (
  //     fields.oldPassword.length > 0 &&
  //     fields.password.length > 0 &&
  //     fields.password === fields.confirmPassword
  //   );
  // }

  async function handleChangeClick(event) {
    event.preventDefault();

    setIsChanging(true);

    await changePassword(fields.oldPassword, fields.password);

    history.push("/login");
  }

  return (
    <div>
      <h1>Change Password</h1>
      <div className="ChangePassword">
        <form onSubmit={handleChangeClick}>
          <label id="oldPassword">
            <br />
            <p>Old Password</p>
            <input
              type="password"
              onChange={handleFieldChange}
              value={fields.oldPassword}
            />
          </label>
          <br />
          <br />
          <label id="password">
            <p>New Password</p>
            <input
              type="password"
              onChange={handleFieldChange}
              value={fields.password}
            />
          </label>
          <br />
          <br />
          <label id="confirmPassword">
            <p>Confirm Password</p>
            <input
              type="password"
              onChange={handleFieldChange}
              value={fields.confirmPassword}
            />
          </label>
          <br />
          <br />
          <button
            block
            type="submit"
            // disabled={!validateForm()}
            isLoading={isChanging}
          >
            Change Password
          </button>
        </form>
        <br />
        <br />
        <Link to="/profile/forget_password">
          <p>Forget Password</p>
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}

export default ChangePassword;
