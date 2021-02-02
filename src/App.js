import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import BottomNav from "./components/Navigation/BottomNav";
// import Homepage from "./components/Home/Homepage";
// import MainLocations from "./components/Locations/MainLocations";
import Login from "./components/Login/Login";
// import Membership from "./components/Membership/Membership";
// import MainProfile from './components/Profile/MainProfile';
import { AuthContext } from "./contexts/AuthContext";
import AppRoute from "./AppRoute.jsx";
import Signup from "./components/Signup/Signup";
import AuthContextProvider from "./contexts/AuthContext";
// import LocationContextProvider from './contexts/LocationContext'
import "./App.css";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { auth } = React.useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         auth ? <Component {...props} /> : <Redirect to="/auth/login" />
//       }
//     />
//   );
// };

function App() {
  // const { user } = React.useContext(AuthContext);

  return (
    <div className="App">
      <AuthContextProvider>
        {/* <LocationContextProvider> */}
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/signup" component={Signup} />
          <Route path="/" component={AppRoute} />
          {/* <Route exact path="/" component={Homepage} />
          <Route path="/locations" component={MainLocations} />
          <Route path="/membership" component={Membership} />
          <ProtectedRoute path="/profile" component={MainProfile} />
          <ProtectedRoute exact path="/" component={BottomNav} /> */}
          {/* <Redirect to="/" /> */}
        </Switch>
        {/* should be {user.length ? <BottomNav /> : null } */}
        {/* {user.length ? null : <BottomNav />} */}
        {/* </LocationContextProvider> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
