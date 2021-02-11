import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { StyledButton } from "../Style";
import { AuthContext } from "../../../contexts/AuthContext";
import PackagesAvailable from "../PackagesAvailable";
import CCards from "../../Style/SVG/Membership/pf.svg";
import axios from "axios";

import "./ProductForm.css";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);

// ProductForm --> PaymentSummaryDisplay --> PaymentSummaryTemplate

const PaymentSummaryDisplay = (props) => {
  const { handleClick } = props;
  return (
    <div>
      {PackagesAvailable.map((membership) => {
        return (
          <div>
            <PaymentSummaryTemplate {...membership} handleClick={handleClick} />
          </div>
        );
      })}
    </div>
  );
};

const PaymentSummaryTemplate = (props) => {
  const { name, taxedPrice, price, validity, handleClick } = props;
  const [termsAndConditions, setTermsAndConditions] = React.useState(false);
  const [autoRenew, setAutoRenew] = React.useState(true);
  const handleTermsChange = () => {
    setTermsAndConditions(!termsAndConditions);
  };

  const { t } = useTranslation(["membership"]);
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
            <div className="mbs-title">
              {t("membership:packagesAvailable.number1.name")}
            </div>
            <div className="mbs-validity">
              {t("membership:packagesAvailable.number1.validity")}
            </div>
          </div>
          <div className="mbs-promo-code-container">
            <div>{t("membership:productForm.promoCode")}</div>
          </div>
          <div className="mbs-payment-summary-container">
            <div className="mbs-payment-summary-element">
              <div>{t("membership:productForm.baseValue")}</div>
              <div>{price}€</div>
            </div>
            <div className="mbs-line-element"></div>
            <div className="mbs-payment-summary-element">
              <div>IVA 23%</div>
              <div>{(price * 0.23).toFixed(2)}€</div>
            </div>
            <div className="mbs-line-element"></div>
            <div className="mbs-payment-summary-element">
              <div style={{ fontWeight: "bold" }}>
                {t("membership:productForm.total")}
              </div>
              <div style={{ fontWeight: "bold" }}>{taxedPrice}€</div>
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
              {t("membership:productForm.terms")}{" "}
              <NavLink
                className="terms-renew"
                to="/membership/terms-and-conditions"
              >
                {t("membership:productForm.conditions")}
              </NavLink>
              <br />
              <br />
              <input type="checkbox" checked={autoRenew} />
              <NavLink className="terms-renew" to="/membership/auto-renew">
                {t("membership:productForm.renew")}
              </NavLink>
              {t("membership:productForm.subscription")}
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
              {t("membership:productForm.pay")}
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
  const { user } = useContext(AuthContext);
  const [language, setLanguage] = useState("");

  const getLanguage = () => {
      setLanguage(localStorage.getItem("i18nextLng"));
  }
  useEffect(() => {
    getLanguage();

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
    const response = await axios.post(
      "/stripe-webhook/create-checkout-session",
      {
        language: language.length ? language : `${user.language}`,
        email: `${user.email}`,
      }
      );
      const session = await response.data;
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
