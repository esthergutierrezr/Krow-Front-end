import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BottomNav from './components/Navigation/BottomNav';
import Homepage from './components/Home/Homepage';
import Locations from './components/Locations/Locations';
import Login from './components/Login/Login';
import Membership from './components/Membership/Membership';
import MainProfile from './components/Profile/MainProfile';
import { Switch, Route } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/locations" component={Locations} />
            <Route path="/login" component={Login} />
            <Route path="/membership" component={Membership} />
            <Route path="/profile" component={MainProfile} />
        </Switch>
        <BottomNav />
      </UserContextProvider>
    </div>
  );
}

export default App;