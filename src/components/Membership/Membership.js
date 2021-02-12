import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductForm from "./ProductForm/ProductForm";
import PackagesDisplay from "./PackagesDisplay/PackagesDisplay";
import TermsAndConditions from "./RenewPlusConditions/TermsAndConditions";
import AutoRenew from "./RenewPlusConditions/AutoRenew";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { auth } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

const Membership = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/membership" component={PackagesDisplay} />
        <ProtectedRoute path="/membership/auto-renew" component={AutoRenew} />
        <ProtectedRoute
          path="/membership/payment-summary"
          component={ProductForm}
        />
        <ProtectedRoute
          path="/membership/terms-and-conditions"
          component={TermsAndConditions}
        />
      </Switch>
    </div>
  );
};

export default Membership;
