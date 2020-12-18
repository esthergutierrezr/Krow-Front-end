import React from "react";
import { Link } from "react-router-dom";

const PaymentSummarySkeleton = (props) => {
  const { name, checkIns, dailyCost, price, validity } = props;
  const [termsAndConditions, setTermsAndContitions] = React.useState(false);
  const [autoRenew, setAutoRenew] = React.useState(true);
  const handleTermsChange = () => {
    setTermsAndContitions(!termsAndConditions);
  };
  const handleRenewChange = () => {
    setAutoRenew(!autoRenew);
  };
  return (
    <div>
      <div>^Selected Plan</div>
      <div>{checkIns}</div>
      <div>{name}</div>
      <div>{dailyCost}</div>
      <div>{validity}</div>
      <div>
        <input type="text" placeholder="Have a discount code?" />
        <button>APPLY</button>
      </div>
      <div>Package price {price}€</div>
      <div>IVA 23% ({price * 0.23}€)</div>
      <div>Payable Ammount {price * 1.23}€</div>
      <input
        type="checkbox"
        value={termsAndConditions}
        checked={termsAndConditions}
        onChange={handleTermsChange}
      />
      I agree to KrowWorks{" "}
      <Link to="/membership/terms-and-conditions">Terms and Conditions</Link>.
      <div>
        <input
          type="checkbox"
          checked={autoRenew}
          onChange={handleRenewChange}
        />
        <Link to="/membership/auto-renew">Auto Renew</Link>
      </div>
      <div>
        <button disabled={!termsAndConditions ? true : false}>
          <span>
            <Link
              to="/membership/payment-method"
              onClick={!termsAndConditions && ((e) => e.preventDefault())}
            >
              CONFIRM PAYMENT
            </Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PaymentSummarySkeleton;
