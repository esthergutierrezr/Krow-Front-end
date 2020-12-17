import React from "react";
import { Switch, Route } from "react-router-dom";
import PaymentSummary from "./PaymentSummary";
import PackagesDisplay from "./PackagesDisplay";
import PaymentMethod from './PaymentMethod';
import TermsAndConditions from './TermsAndConditions';
import AutoRenew from './AutoRenew';
import PaymentSuccessful from './PaymentSuccessful';

const Membership = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/membership" component={PackagesDisplay} />
        <Route path="/membership/auto-renew" component={AutoRenew} />
        <Route path="/membership/payment-method" component={PaymentMethod} />
        <Route path="/membership/payment-summary" component={PaymentSummary} />
        <Route path="/membership/payment-successful" component={PaymentSuccessful} />
        <Route path="/membership/terms-and-conditions" component={TermsAndConditions} />
      </Switch>
    </div>
  );
};

export default Membership;
