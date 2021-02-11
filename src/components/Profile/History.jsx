// History
// Billing
// membership card
// Check-Ins
// check-in card

import React, {useContext} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Billing from "./Billing";
import CheckIns from "./CheckIns";
import { AuthContext } from "../../contexts/AuthContext";

const History = () => {
  const { user } = useContext(AuthContext);
  console.log("object", user);
  // console.log(user)
  const id = Number(user.id);

  return (
    <div>
      <h1>Historic</h1>
      <Switch>
        {/* <Route path={`/profile/${id}/historic/ckeckins`} component={CheckIns} /> */}
        <Route path={`/profile/${id}/historic/billing`} component={Billing} />
        <Redirect path={`/profile/${id}/historic/billing`} component={Billing} />
      </Switch>
    </div>
  );
};

export default History;
