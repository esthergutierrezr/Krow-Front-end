/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import { NavLink as Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import UserProfile from "./UserProfile";
import { AuthContext } from "../../contexts/AuthContext";
import { Content, ArrowD } from "./Styles";
import "./profile.css";
import ArrowDown from "../Style/SVG/Profile/SVG_Screen Perfil-07_seta ver mais.svg";
import { HeadersProfile } from "../Style/Backgrounds";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div className="bg-white-profile">
      <UserProfile />
      <Content>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <div className="multi-level">
            <div className="drop-item">
              <input type="checkbox" id="A" />
              <label className="label-top" htmlFor="A">
                Account Settings
                <ArrowD src={ArrowDown} alt="arrow drop-menu" />
              </label>
              <ul>
                <Link to={`/profile/${user.id}/edit`}>
                  <li className="active">Edit Profile</li>
                </Link>
                <Link to="/profjile/change_password">
                  <li className="active">Change Password</li>
                </Link>
              </ul>
            </div>
          </div>
          <Link to="/membership">
            <label className="label-top">Add a Membership</label>
          </Link>
          <br />
          <Link to="/profile/notifications">
            <label className="label-top">Notifications</label>
          </Link>
          <br />
          <Link to="/profile/historic">
            <label className="label-top">Historic</label>
          </Link>
          <br />
          <Link to="/invite">
            <label className="label-top">Invite a Friend</label>
          </Link>
          <div>
            <br />
            <Link to="/contact">
              <label className="label-bottom">Contact Us</label>
            </Link>
            <br />
            {/* <Link to="/contact"> */}
            <label className="label-bottom">Mudar para Português</label>
            {/* </Link> */}
            <br />
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
    </div>
  );
};

export default Profile;
