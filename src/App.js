import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import AppRoute from "./AppRoute.jsx";
import Signup from "./components/Signup/Signup";
import AuthContextProvider from "./contexts/AuthContext";
import LocationContextProvider from "./contexts/LocationContext";
import ChooseLanguage from "./components/ChooseLanguage/ChooseLanguage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <LocationContextProvider>
          <Switch>
            {/*<Route
              exact
              path="/"
              component={() => <Redirect to="/choose-language" />}
            />*/}
            <Route path="/choose-language" component={ChooseLanguage} />
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
