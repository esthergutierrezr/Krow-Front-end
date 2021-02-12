import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ChooseLanguage from "./components/ChooseLanguage/ChooseLanguage";
import Login from "./components/Login/Login";
import AppRoute from "./AppRoute";
import Signup from "./components/Signup/Signup";
import AuthContextProvider from "./contexts/AuthContext";
import LocationContextProvider from "./contexts/LocationContext";
import "./App.css";

function App() {
  // console.log(localStorage.getItem("i18nextLng"))

  // let language = localStorage.getItem("i18nextLng")
  // console.log(language) 
  
  return (
    <div className="App">
      <AuthContextProvider>
        <LocationContextProvider>
          <Switch>
            {/* <Route
              exact
              path="/"
              component={() => !localStorage.getItem("i18nLng") ?  <Redirect to="/choose-language" :   />}
            /> */}
            {/* {!language ?  <Route path="/choose-language" component={ChooseLanguage} /> :  <Route path="/" component={AppRoute} />} */}
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/signup" component={Signup} />
            <Route path="/choose-language" component={ChooseLanguage} />
            <Route path="/" component={AppRoute} />
            {/* <Redirect to="/" /> */}
          </Switch>
        </LocationContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
