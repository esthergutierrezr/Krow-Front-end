import React, {useContext} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
// import ChangePassword from "./ChangePassword";
// import ForgetPassword from "./ForgetPassword";
// import Notification from "./Notification";
// import History from './History';
import { AuthContext } from "../../contexts/AuthContext";


function MainProfile() {

  const { user } = useContext(AuthContext);
  console.log("object", user)
  // console.log(user)
  const id = Number(user.id);


  return (
    <Switch>
      <Route exact path={`/profile/${id}`} component={Profile} />
      <Route path={`/profile/${id}/edit`} component={EditProfile} />
      {/* <Route path={`/profile/${id}/change_password`} component={ChangePassword} />
      <Route path={`/profile/${id}/forget_password`} component={ForgetPassword} />
      <Route path={`/profile/${id}/notifications`} component={Notification} />
      <Route path={`/profile/${id}/historic`} component={History} /> */}
      {/* <Redirect path={`/profile/${id}`} /> */}
    </Switch>
  );
}

export default MainProfile;
