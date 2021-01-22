import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BottomNav from "./components/Navigation/BottomNav";
import Homepage from "./components/Home/Homepage";
import Locations from "./components/Locations/Locations";
import Login from "./components/Login/Login";
import Membership from "./components/Membership/Membership";
import Profile from "./components/Profile/Profile";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import Signup from "./components/Signup/Signup";
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
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/locations" component={Locations} />
          <Route path="/membership" component={Membership} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/signup" component={Signup} />
          <ProtectedRoute path="/profile" component={Profile} />
          {/* <Redirect to="/" /> */}
        </Switch>
        <BottomNav />
      </AuthContextProvider>
    </div>
  );
}

export default App;
