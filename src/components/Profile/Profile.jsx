/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
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

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation(["profile"]);
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
              <label htmlFor="A">
                <WheelProfile src={Wheel} alt="settings-wheel" />
                {t("profile:profile.accountSettings")}
                <ArrowD src={ArrowDown} alt="arrow drop-menu" />
              </label>
              <hr />
              <DropMenu>
                <Link to={`/profile/${user.id}/edit`}>
                  <li className="active">
                    {t("profile:profile.editProfile")}
                  </li>
                </Link>
                <hr />
                <Link to="/password/change">
                  <li className="active">
                    {t("profile:profile.changePassword")}
                  </li>
                </Link>
                <hr />
              </DropMenu>
            </div>
          </div>
          <Link to="/membership">
            <label>
              <CartProfile src={Cart} alt="settings-wheel" />
              {t("profile:profile.addMembership")}
            </label>
          </Link>
          <hr />

          <Link to="/profile/notifications">
            <label>
              <NotificationProfile src={Notification} alt="settings-wheel" />
              {t("profile:profile.notifications")}
            </label>
          </Link>
          <hr />

          <Link to="/profile/historic">
            <label>
              <HistoricProfile src={Historic} alt="settings-wheel" />
              {t("profile:profile.historic")}
            </label>
          </Link>
          <hr />

          <Link to="/invite">
            <label>
              {" "}
              <InviteProfile src={Invite} alt="settings-wheel" />
              {t("profile:profile.inviteAFriend")}
            </label>
          </Link>
          <hr />
          <LabelBottom>
            <br />
            <Link to="/choose-language">
              <label>{t("profile:profile.changeLanguage")}</label>
            </Link>
            <br />
            <br />
            <label
              onClick={() => {
                Cookies.remove("authToken");
                history.push("/auth/login");
              }}
            >
              {t("profile:profile.logout")}
            </label>
          </LabelBottom>
        </Menu>
      </Content>
    </div>
  );
};

export default Profile;
