import "./App.css";
import BottomNav from "./components/Navigation/BottomNav";
import Homepage from "./components/Home/Homepage";
import MainLocations from "./components/Locations/MainLocations";
import Login from "./components/Login/Login";
import Membership from "./components/Membership/Membership";
import Profile from "./components/Profile/Profile";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/locations" component={MainLocations} />

        <Route path="/login" component={Login} />
        <Route path="/membership" component={Membership} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <BottomNav />
    </div>
  );
}

export default App;
