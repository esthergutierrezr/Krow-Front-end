/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import { NavLink as Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import UserProfile from "./UserProfile";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Menu,
  Content,
  ArrowD,
  WheelProfile,
  CartProfile,
  NotificationProfile,
  HistoricProfile,
  InviteProfile,
  DropMenu,
  LabelBottom,
} from "./Styles";
import "./profile.css";
import ArrowDown from "../Style/SVG/Profile/SVG_Screen Perfil-07_seta ver mais.svg";
import Wheel from "../Style/SVG/Profile/SVG_Screen Perfil-01_icon.svg";
import Cart from "../Style/SVG/Profile/SVG_Screen Perfil-02_icon.svg";
import Historic from "../Style/SVG/Profile/SVG_Screen Perfil-04_icon.svg";
import Notification from "../Style/SVG/Profile/SVG_Screen Perfil-03_icon.svg";
import Invite from "../Style/SVG/Profile/SVG_Screen Perfil-05_icon.svg";
// import { HeadersProfile } from "../Style/Backgrounds";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div className="bg-white-profile">
      <UserProfile />
      <Content>
        <br />
        <br />
        <Menu>
          <div className="multi-level">
            <div className="drop-item">
              <input type="checkbox" id="A" />
              <label className="label-top" htmlFor="A">
                <WheelProfile src={Wheel} alt="settings-wheel" />
                Account Settings
                <ArrowD src={ArrowDown} alt="arrow drop-menu" />
              </label>
              <hr />
              <DropMenu>
                <Link to={`/profile/${user.id}/edit`}>
                  <li className="active">Edit Profile</li>
                </Link>
                <hr />
                <Link to={`/profile/${user.id}/password/change`}>
                  <li className="active">Change Password</li>
                </Link>
                <hr />
              </DropMenu>
            </div>
          </div>
          <Link to="/membership">
            <label className="label-top">
              <CartProfile src={Cart} alt="settings-wheel" />
              Add a Membership
            </label>
          </Link>
          <hr />

          <Link to="/profile/notifications">
            <label className="label-top">
              <NotificationProfile src={Notification} alt="settings-wheel" />
              Notifications
            </label>
          </Link>
          <hr />

          <Link to="/profile/historic">
            <label className="label-top">
              <HistoricProfile src={Historic} alt="settings-wheel" />
              Historic
            </label>
          </Link>
          <hr />

          <Link to="/invite">
            <label className="label-top">
              {" "}
              <InviteProfile src={Invite} alt="settings-wheel" />
              Invite a Friend
            </label>
          </Link>
          <hr />
          <LabelBottom>
            {/* <Link to="/contact">
              <label className="label-bottom">Contact Us</label>
            </Link>
           <br/> */}
            <br />
            <label className="label-bottom">Mudar para Português</label>
            <br />
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
          </LabelBottom>
        </Menu>
      </Content>
    </div>
  );
};

export default Profile;
