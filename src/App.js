import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BottomNav from "./components/Navigation/BottomNav";
import Homepage from "./components/Home/Homepage";
import Locations from "./components/Locations/Locations";
import Login from "./components/Login/Login";
import Membership from "./components/Membership/Membership";
import MainProfile from "./components/Profile/MainProfile";
import { AuthContext } from "./contexts/AuthContext";
import Signup from "./components/Signup/Signup";
import LocationContextProvider from './contexts/LocationContext'
import "./App.css";

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

function App() {
  const { user } = React.useContext(AuthContext);

  return (
    <div className="App">
      <LocationContextProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/locations" component={Locations} />
          <Route path="/login" component={Login} />
          <Route path="/membership" component={Membership} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/signup" component={Signup} />
          <ProtectedRoute path="/profile" component={MainProfile} />
          {/* <Redirect to="/" /> */}
          <ProtectedRoute exact path="/" component={BottomNav} />
        </Switch>
        {/* should be {user.length ? <BottomNav /> : null } */}
        {user.length ? null : <BottomNav />}
      </LocationContextProvider>
    </div>
  );
}

export default App;
