import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BottomNav from './components/Navigation/BottomNav';
import Homepage from './components/Home/Homepage';
import Locations from './components/Locations/Locations';
import Login from './components/Login/Login';
import Membership from './components/Membership/Membership';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/locations" component={Locations} />
        <Route path="/login" component={Login} />
        <Route path="/membership" component={Membership} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <BottomNav />
    </div>
  );
}

export default App;