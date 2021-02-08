import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { StyledButton } from "../Style";
import PackagesAvailable from "../PackagesAvailable";
import CCards from "../../Style/SVG/Membership/pf.svg";

import "./ProductForm.css";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51I6HEqA5Jiwwo3yOlA1U4oaHSVxEgJpnZkoYPKhH2LKpWwFTJTnFMJiE3v2L4Et29rcdsUULbFHOeasf4Sp09bKC00MnRbRNl6"
);

const PaymentSummaryDisplay = () => {
  return (
    <div>
      {PackagesAvailable.map((membership) => {
        return (
          <div>
            <PaymentSummaryTemplate {...membership} />
          </div>
        );
      })}
    </div>
  );
};

const PaymentSummaryTemplate = (props, { handleClick }) => {
  const { name, taxedPrice, price, validity } = props;
  const [termsAndConditions, setTermsAndConditions] = React.useState(false);
  const [autoRenew, setAutoRenew] = React.useState(true);
  const handleTermsChange = () => {
    setTermsAndConditions(!termsAndConditions);
  };
  const handleRenewChange = () => {
    setAutoRenew(!autoRenew);
  };
  return (
    <div>
      <div className="white-bg"></div>
      <div className="color-bg">
        <div className="mbs-img-container">
          <img
            src={CCards}
            alt="credit cards"
            width="139.6px"
            height="127.3px"
          />
        </div>
        <div>
          <div className="mbs-text-title-container">
            <div className="mbs-title">{name}</div>
            <div className="mbs-validity">{validity}</div>
          </div>
          <div className="mbs-promo-code-container">
            <input
              className="mbs-promo-code-input"
              type="text"
              placeholder="Código promocional?"
            />
            <StyledButton dark className="mbs-promo-code-dark-button">
              Aplicar
            </StyledButton>
          </div>
          <div className="mbs-payment-summary-container">
            <div className="mbs-payment-summary-element">
              <div>Valor base</div>
              <div>{price}€</div>
            </div>
            <div className="mbs-line-element"></div>
            <div className="mbs-payment-summary-element">
              <div>IVA 23%</div>
              <div>{(price * 0.23).toFixed(2)}€</div>
            </div>
            <div className="mbs-line-element"></div>
            <div className="mbs-payment-summary-element">
              <div style={{ fontWeight: "bold" }}>Valor total</div>
              <div>{taxedPrice}€</div>
            </div>
            <div className="mbs-line-element"></div>
          </div>
          <div className="mbs-checkbox-container">
            <div className="mbs-checkbox-element">
              <input
                type="checkbox"
                value={termsAndConditions}
                checked={termsAndConditions}
                onChange={handleTermsChange}
              />
              Eu concordo com os{" "}
              <Link to="/membership/terms-and-conditions">
                <u>Termos & Condições da Krow</u>
              </Link>
              .
              <br />
              <br />
              <input
                type="checkbox"
                checked={autoRenew}
                onChange={handleRenewChange}
              />
              <Link to="/membership/auto-renew">
                <u>Auto-renovar</u>
              </Link>{" "}
              a minha subscrição
            </div>
          </div>
          <div className="mbs-button">
            <StyledButton
              className="mbs-payment-btn"
              type="button"
              id="checkout-button"
              role="link"
              onClick={handleClick}
              disabled={!termsAndConditions ? true : false}
            >
              Pagamento
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
};
const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);
export default function ProductForm() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const response = await fetch("/stripe-webhook/create-checkout-session", {
      method: "POST",
    });
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
  return message ? (
    <Message message={message} />
  ) : (
    <PaymentSummaryDisplay handleClick={handleClick} />
  );
}
