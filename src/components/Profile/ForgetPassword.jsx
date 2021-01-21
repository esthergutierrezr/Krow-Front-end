import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function ResetPassword() {
  const user = useContext(AuthContext);
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

  function validateCodeForm() {
    return fields.email.length > 0;
  }

  function validateResetForm() {
    return (
      fields.code.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

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
          disabled={!validateCodeForm()}
        >
          Send Confirmation
        </button>
      </form>
    );
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmClick}>
        <label id="code">
          <p>Confirmation Code</p>
          <input
            autoFocus
            type="tel"
            value={fields.code}
            onChange={handleFieldChange}
          />
          <p>
            Please check your email ({fields.email}) for the confirmation code.
          </p>
        </label>
        <hr />
        <label id="password">
          <p>New Password</p>
          <input
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </label>
        <label bsSize="large" controlId="confirmPassword">
          <p>Confirm Password</p>
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
          disabled={!validateResetForm()}
        >
          Confirm
        </button>
      </form>
    );
  }

  function renderSuccessMessage() {
    return (
      <div className="success">
        <p>Your password has been reset.</p>
        <p>
          <Link to="/login">
            Click here to login with your new credentials.
          </Link>
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
