import React, { useState, useContext } from "react";
import { NavLink as Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import UserProfile from "./UserProfile";
import { AuthContext } from "../../contexts/AuthContext";
import { Content } from "./Styles";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const LogOut = () => {
    setIsLoggedIn(false);
    history.push("/");
  };
  return (
    <>
      <h1>luis</h1>
    <Content>
      <header>{ user ? <UserProfile /> : <LogOut />}</header>
      <div>
        <div className="multi-level">
          <div className="item">
            <input type="checkbox" id="A" />
            <label className="label-top" htmlFor="A">
              Account Settings
              <i className="arrow down"></i>
            </label>
            <ul>
              <Link to={`/profile/${user.id}/edit`}>
                <li className="active">Edit Profile</li>
              </Link>
              <Link to="/profile/change_password">
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
          <label
            className="label-bottom"
            onClick={() => {
              Cookies.remove("authToken");
              history.push("/auth/login");
            }}
          >
            Log Out
          </label>
        </div>
      </div>
    </Content>
    </>
  );
};

export default Profile;
