import React from "react";
import { Switch, Route } from "react-router-dom";
import PaymentSummary from "./PaymentSummary";
import PackagesDisplay from "./PackagesDisplay";

const Membership = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/membership" component={PackagesDisplay} />
        <Route path="/membership/payment-summary" component={PaymentSummary} />
      </Switch>
    </div>
  );
};

export default Membership;
