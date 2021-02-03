import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function ResetPassword() {
  const user = useContext(AuthContext);
  const { t } = useTranslation(["profile"]);
  const [fields, handleFieldChange] = useState({
    code: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  //   function validateCodeForm() {
  //     return fields.email.length > 0;
  //   }

  //   function validateResetForm() {
  //     return (
  //       fields.code.length > 0 &&
  //       fields.password.length > 0 &&
  //       fields.password === fields.confirmPassword
  //     );
  //   }

  async function handleSendCodeClick(event) {
    event.preventDefault();

    setIsSendingCode(true);

    try {
      await forgotPassword(fields.email);
      setCodeSent(true);
    } catch (error) {
      setIsSendingCode(false);
    }
  }

  async function handleConfirmClick(event) {
    event.preventDefault();

    setIsConfirming(true);

    try {
      await forgotPasswordSubmit(fields.email, fields.code, fields.password);
      setConfirmed(true);
    } catch (error) {
      setIsConfirming(false);
    }
  }

  function renderRequestCodeForm() {
    return (
      <form onSubmit={handleSendCodeClick}>
        <label id="email">
          <p>Email</p>
          <input
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <button
          block
          type="submit"
          isLoading={isSendingCode}
          //   disabled={!validateCodeForm()}
        >
          {t("profile:forgetPassword.sendConfirmation")}
        </button>
      </form>
    );
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmClick}>
        <label id="code">
          <p>{t("profile:forgetPassword.confirmationCode")}</p>
          <input
            autoFocus
            type="tel"
            value={fields.code}
            onChange={handleFieldChange}
          />
          <p>
            {t("profile:forgetPassword.pleaseCheckEmail")} ({fields.email}){" "}
            {t("profile:forgetPassword.forConfCode")}.
          </p>
        </label>
        <hr />
        <label id="password">
          <p>{t("profile:forgetPassword.new")}</p>
          <input
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </label>
        <label bsSize="large" controlId="confirmPassword">
          <p>{t("profile:forgetPassword.confirm")}</p>
          <input
            type="password"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />
        </label>
        <button
          block
          type="submit"
          isLoading={isConfirming}
          //   disabled={!validateResetForm()}
        >
          {t("profile:forgetPassword.submit")}
        </button>
      </form>
    );
  }

  function renderSuccessMessage() {
    return (
      <div className="success">
        <p>{t("profile:forgetPassword.confMessage")}</p>
        <p>
          <Link to="/login">{t("profile:forgetPassword.loginWithNewPW")}.</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="ResetPassword">
      {!codeSent
        ? renderRequestCodeForm()
        : !confirmed
        ? renderConfirmationForm()
        : renderSuccessMessage()}
    </div>
  );
}
