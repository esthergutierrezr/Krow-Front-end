// change password
// old password
// new password
// confirm password
// forget password (different component????)
// insert email
// Button Send Reset Link
// (How generate a link to reset password)

import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function ChangePassword() {
  const { user, setUser } = useContext(AuthContext);
  const { t } = useTranslation(["profile"]);
  const history = useHistory();
  const [fields, handleFieldChange] = useState({
    password: "",
    oldPassword: user.password,
    confirmPassword: "",
  });

  const [isChanging, setIsChanging] = useState(false);

  function handleChangeClick(event) {
    event.preventDefault();

    setIsChanging(true);

    history.push("/login");
  }

  return (
    <div>
      <h1>{t("profile:changePassword.change")}</h1>
      <div className="ChangePassword">
        <form onSubmit={handleChangeClick}>
          <label id="oldPassword">
            <br />
            <p>{t("profile:changePassword.old")}</p>
            <input
              type="password"
              onChange={handleFieldChange}
              value={fields.oldPassword}
            />
          </label>
          <br />
          <br />
          <label id="password">
            <p>{t("profile:changePassword.new")}</p>
            <input
              type="password"
              onChange={handleFieldChange}
              value={fields.password}
            />
          </label>
          <br />
          <br />
          <label id="confirmPassword">
            <p>{t("profile:changePassword.confirm")}</p>
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
            {t("profile:changePassword.change")}
          </button>
        </form>
        <br />
        <br />
        <Link to="/profile/forget_password">
          <p>{t("profile:changePassword.forget")}?</p>
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}

export default ChangePassword;
