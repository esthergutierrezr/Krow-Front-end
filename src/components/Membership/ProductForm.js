import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { StyledButton } from "./Style";
import PackagesAvailable from "./PackagesAvailable";

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
      <div>{name}</div>
      <div>{validity}</div>
      <div>
        <input
          type="text"
          placeholder="Código promocional?"
          style={{
            borderRadius: "0.3rem",
            border: "1px solid rgba(0,0,0, 0.2)",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        />
        <StyledButton dark>Aplicar</StyledButton>
      </div>
      <div>Valor base {price}€</div>
      <div>IVA 23% {(price * 0.23).toFixed(2)}€</div>
      <div style={{ fontWeight: "bold" }}>Valor total {taxedPrice}€</div>
      <input
        type="checkbox"
        value={termsAndConditions}
        checked={termsAndConditions}
        onChange={handleTermsChange}
      />
      Eu concordo com os{" "}
      <Link to="/membership/terms-and-conditions">
        Termos & Condições da Krow
      </Link>
      .
      <div>
        <input
          type="checkbox"
          checked={autoRenew}
          onChange={handleRenewChange}
        />
        <Link to="/membership/auto-renew">Auto-renovar</Link> a minha subscrição
      </div>
      <div>
        <button
          type="button"
          id="checkout-button"
          role="link"
          onClick={handleClick}
          style={{
            border: "none",
            borderRadius: "0.2em",
            fontSize: "0.9rem",
            padding: "5px 0px",
            width: "140px",
            backgroundColor: "#f9c85f",
          }}
          disabled={!termsAndConditions ? true : false}
        >
          Pagamento
        </button>
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
