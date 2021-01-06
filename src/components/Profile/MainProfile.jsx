import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
// import UserContextProvider from '../../contexts/UserContext';


function MainProfile() {
  return (
    // <UserContextProvider>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route path="/profile/edit" component={EditProfile} />
        <Route path="/profile/password" component={ChangePassword} />
        <Redirect path="/profile" />
      </Switch>
    // </UserContextProvider>
  );
}

export default MainProfile;
