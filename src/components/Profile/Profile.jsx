import React, { useState } from "react";
import { NavLink as Link, useHistory } from "react-router-dom";
import UserProfile from "./UserProfile";
import Arrow from "./arrow+left.png";
import { Content } from "./Styles";

export const LogOut = () => {
  const history = useHistory();
  // userHasAuthenticated(false);
  history.push("/");
};

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Content>
      <header>{isLoggedIn ? <UserProfile /> : <LogOut />}</header>
      {/* show dropdown */}
      <div className="nav">
        <div className="multi-level">
          <div className="item">
            <input type="checkbox" id="A"/>
            <label className="label-top" htmlFor="A">
              Account Settings
            </label>
              <img src={Arrow} className="arrow" />
            <ul>
              <Link to="/profile/edit">
                <li className="active">Edit Profile</li>
              </Link>
              <Link to="/profile/password">
                <li className="active">Change Password</li>
              </Link>
            </ul>
          </div>
        </div>
        <Link to="/membership">
          <label className="label-top">Add a Membership</label>
        </Link>
        <Link to="/profile/notifications">
          <label className="label-top">Notifications</label>
        </Link>
        <Link to="/profile/historic">
          <label className="label-top">Historic</label>
        </Link>
        <Link to="/invite">
          <label className="label-top">Invite a Friend</label>
        </Link>
        <br />
        <br />
        <div>
          <Link to="/contact">
            <label className="label-bottom">Contact Us</label>
          </Link>
          <Link to="/">
            <label
              className="label-bottom"
              type="button"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              Log Out
            </label>
          </Link>
        </div>
      </div>
    </Content>
  );
};

export default Profile;
