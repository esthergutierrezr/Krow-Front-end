import React from "react";
import { Switch, Route } from "react-router-dom";
import BottomNav from "./components/Navigation/BottomNav";
import Homepage from "./components/Home/Homepage";
import MainLocations from "./components/Locations/MainLocations";
import Login from "./components/Login/Login";
import Membership from "./components/Membership/Membership";
import Profile from "./components/Profile/Profile";
import UserContext from "./contexts/UserContext";
import LocationContextProvider from "./contexts/LocationContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserContext>
        <LocationContextProvider>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/locations" component={MainLocations} />
            <Route path="/login" component={Login} />
            <Route path="/membership" component={Membership} />
            <Route path="/profile" component={Profile} />
          </Switch>
          <BottomNav />
        </LocationContextProvider>
      </UserContext>
    </div>
  );
}

export default App;
