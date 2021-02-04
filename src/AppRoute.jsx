import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BottomNav from "./components/Navigation/BottomNav";
import Homepage from "./components/Home/Homepage";
import MainLocations from "./components/Locations/MainLocations";
import Membership from "./components/Membership/Membership";
import MainProfile from "./components/Profile/MainProfile";
import ReferFriend from "./components/Profile/ReferFriend";
// import { AuthContext } from "./contexts/AuthContext";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { auth } = React.useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         auth ? <Component {...props} /> : <Redirect to="/auth/login" />}
//     />
//   );
// };

function AppRoute() {
  // const { user } = React.useContext(AuthContext);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/locations" component={MainLocations} />
        <Route path="/membership" component={Membership} />
        <Route path="/invite" component={ReferFriend} />
        <Route path="/profile" component={MainProfile} />
        {/* <ProtectedRoute path="/profile" component={MainProfile} /> */}
        <Redirect to="/" />
      </Switch>
      <BottomNav />
    </div>
  );
}

export default AppRoute;
