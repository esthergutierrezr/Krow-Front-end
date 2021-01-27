import React from "react";
import { Switch, Route } from "react-router-dom";
import BottomNav from "./components/Navigation/BottomNav";
import Homepage from "./components/Home/Homepage";
import MainLocations from "./components/Locations/MainLocations";
import Login from "./components/Login/Login";
import Membership from "./components/Membership/Membership";
import Profile from "./components/Profile/Profile";
// import UserContextProvider from "./contexts/UserContext";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import LocationProvider from "./contexts/LocationContext";
import Signup from "./components/Signup/Signup";
import "./App.css";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { auth } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        {/* <UserContextProvider> */}
        <LocationProvider>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/locations" component={MainLocations} />
            <Route path="/login" component={Login} />
            <Route path="/membership" component={Membership} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute path="/profile" component={Profile} />
            {/* <Redirect to="/" /> */}
          </Switch>
          <BottomNav />
        </LocationProvider>
        {/* </UserContextProvider> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
