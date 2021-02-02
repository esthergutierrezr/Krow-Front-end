import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BottomNav from "./components/Navigation/BottomNav";
import Homepage from "./components/Home/Homepage";
import MainLocations from "./components/Locations/MainLocations";
import Membership from "./components/Membership/Membership";
import MainProfile from "./components/Profile/MainProfile";
import { AuthContext } from "./contexts/AuthContext";
import LocationContextProvider from "./contexts/LocationContext";
import AuthContextProvider from "./contexts/LocationContext";
import "./App.css";

import ReferFriend from "./components/Profile/ReferFriend"

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

function AppRoute() {
  const { user } = React.useContext(AuthContext);

  return (
    <div className="App">
      <AuthContextProvider>
        <LocationContextProvider>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/locations" component={MainLocations} />
            <Route path="/membership" component={Membership} />
            <Route path="/invite" component={ReferFriend} />
            {/* <ProtectedRoute path="/profile" component={MainProfile} /> */}
            <Route path="/profile" component={MainProfile} />
            {/* <Redirect to="/" /> */}
          </Switch>
          <BottomNav />
        </LocationContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default AppRoute;
