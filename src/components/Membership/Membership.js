import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductForm from "./ProductForm";
import PackagesDisplay from "./PackagesDisplay";
import TermsAndConditions from './TermsAndConditions';
import AutoRenew from './AutoRenew';

const Membership = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/membership" component={PackagesDisplay} />
        <Route path="/membership/auto-renew" component={AutoRenew} />
        <Route path="/membership/payment-summary" component={ProductForm} />
        <Route path="/membership/terms-and-conditions" component={TermsAndConditions} />
      </Switch>
    </div>
  );
};

export default Membership;
