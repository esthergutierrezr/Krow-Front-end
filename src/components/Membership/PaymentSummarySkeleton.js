import React from "react";
import { Link } from "react-router-dom";

const PaymentSummarySkeleton = (props) => {
  const { name, checkIns, dailyCost, price, validity } = props;
  const [termsAndConditions, setTermsAndContitions] = React.useState(false);
  const [autoRenew, setAutoRenew] = React.useState(true);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const handleTermsChange = () => {
    setTermsAndContitions(!termsAndConditions);
  };
  const handleRenewChange = () => {
    setAutoRenew(!autoRenew);
    setIsDisabled(!isDisabled);
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
        <button >CONFIRM PAYMENT</button>
      </div>
    </div>
  );
};

export default PaymentSummarySkeleton;
