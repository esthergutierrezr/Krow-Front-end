/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink as Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
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
import { config } from "../../helpers/auth";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const { t, i18n } = useTranslation(["profile"]);
  const history = useHistory();
  console.log("user", user);

  // useEffect(() => {
  //   setUser(user);
  // }, [user]);

  // useEffect(() => {
  //   changeLanguage();
  // }, []);

  // const resetSession = () => {
  //   window.location.href = "/";
  // };

  const changeLanguage = (newLanguage) => {
    // event.preventDefault();
    console.log("changeLanguage");
      axios
        .put(`/profile/${user.id}/edit`, { language: newLanguage }, config)
        .then(async (response) => {
          console.log("response", response.data[0]);
          const user = await setUser(response.data[0]);
          i18n.changeLanguage(newLanguage)
        })
        .catch((error) => console.error(error));
  };

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
                  <li className="active">{t("profile:profile.editProfile")}</li>
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

          <Link to={`/profile/${user.id}/notifications`}>
            <label>
              <NotificationProfile src={Notification} alt="settings-wheel" />
              {t("profile:profile.notifications")}
            </label>
          </Link>
          <hr />

          <Link to={`/profile/${user.id}/historic`}>
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
            <label onClick={() => {
              console.log("user language", user.language)
              if(user.language === "pt") {
                changeLanguage("en")
              } else {
                changeLanguage("pt")
              }
              }}> 
              {t("profile:profile.changeLanguage")}
            </label>
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
