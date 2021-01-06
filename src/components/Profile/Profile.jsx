import React, { useState } from "react";
import { NavLink as Link, useHistory } from "react-router-dom";
import UserProfile from "./UserProfile";
import Arrow from "./arrow+left.png";
import { Content } from "./Styles";

export const LogOut = () => {
  const history = useHistory();

  userHasAuthenticated(false);

  history.push("/");
};

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Content>
      <header>
        <h1>Profile</h1>
        {isLoggedIn ? <UserProfile /> : <LogOut />}
      </header>
      {/* show dropdown */}
      <div className="nav">
        <div className="multi-level">
          <div className="item">
            <input type="checkbox" id="A" />
            <img src={Arrow} className="arrow" />
            <label htmlFor="A">Account Settings</label>
            <ul>
              <Link to="/profile/edit">
                <li>Edit Profile</li>
              </Link>
              <Link to="/profile/password">
                <li>Change Password</li>
              </Link>
            </ul>
          </div>
        </div>
        <Link to="/contact">
          <label>Contact Us</label>
        </Link>
        <Link to="/">
          <button type="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            Log Out
          </button>
        </Link>
      </div>
    </Content>
  );
};

export default Profile;
