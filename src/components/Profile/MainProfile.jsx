import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import Notification from "./Notification";
import History from './History';

function MainProfile() {
  return (
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route path="/profile/edit" component={EditProfile} />
      <Route path="/profile/password" component={ChangePassword} />
      <Route path="/profile/notifications" component={Notification} />
      <Route path="/profile/historic" component={History} />
      <Redirect path="/profile" />
    </Switch>
  );
}

export default MainProfile;
