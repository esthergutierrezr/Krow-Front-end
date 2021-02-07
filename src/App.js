import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import AppRoute from "./AppRoute.jsx";
import Signup from "./components/Signup/Signup";
import AuthContextProvider from "./contexts/AuthContext";
import LocationContextProvider from './contexts/LocationContext'
import "./App.css";


function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <LocationContextProvider>
          <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/signup" component={Signup} />
            <Route path="/" component={AppRoute} />
          </Switch>
          {/* should be {user.length ? <BottomNav /> : null } */}
          {/* {user.length ? null : <BottomNav />} */}
        </LocationContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
