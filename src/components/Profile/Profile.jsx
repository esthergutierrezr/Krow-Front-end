import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink as Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import UserProfile from "./UserProfile";
import { AuthContext } from "../../contexts/AuthContext";
import { Content } from "./Styles";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const { t } = useTranslation(["profile"]);
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
        <header>{user ? <UserProfile /> : <LogOut />}</header>
        <div>
          <div className="multi-level">
            <div className="item">
              <input type="checkbox" id="A" />
              <label className="label-top" htmlFor="A">
                {t("profile:forgetPassword.accountSettings")}
                <i className="arrow down"></i>
              </label>
              <ul>
                <Link to={`/profile/${user.id}/edit`}>
                  <li className="active">
                    {t("profile:forgetPassword.editProfile")}
                  </li>
                </Link>
                <Link to="/profile/change_password">
                  <li className="active">
                    {t("profile:forgetPassword.changePassword")}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <Link to="/membership">
            <label className="label-top">
              {t("profile:forgetPassword.addMembership")}
            </label>
          </Link>
          <Link to="/profile/notifications">
            <label className="label-top">
              {t("profile:forgetPassword.notifications")}
            </label>
          </Link>
          <Link to="/profile/historic">
            <label className="label-top">
              {t("profile:forgetPassword.historic")}
            </label>
          </Link>
          <Link to="/invite">
            <label className="label-top">
              {t("profile:forgetPassword.inviteAFriend")}
            </label>
          </Link>
          <br />
          <br />
          <div>
            <Link to="/contact">
              <label className="label-bottom">
                {t("profile:forgetPassword.contactUs")}
              </label>
            </Link>
            <label
              className="label-bottom"
              onClick={() => {
                Cookies.remove("authToken");
                history.push("/auth/login");
              }}
            >
              {t("profile:forgetPassword.logout")}
            </label>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Profile;
