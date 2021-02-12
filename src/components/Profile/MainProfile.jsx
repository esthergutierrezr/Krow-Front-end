import React, {useContext} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import Notification from "./Notification";
import History from './History';
import { AuthContext } from "../../contexts/AuthContext";


function MainProfile() {

  const { user } = useContext(AuthContext);
  const id = Number(user.id);


  return (
    <Switch>
      <Route exact path={`/profile/${id}`} component={Profile} />
      <Route path={`/profile/${id}/edit`} component={EditProfile} />
      <Route path={`/profile/${id}/notifications`} component={Notification} />
      <Route path={`/profile/${id}/history`} component={History} />
      <Redirect path={`/profile/${id}`} />
    </Switch>
  );
}

export default MainProfile;
