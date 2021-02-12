import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import "../homepage.css";

function UserGreeting() {
  const { t } = useTranslation(["homepage"]);

  const { user } = useContext(AuthContext);

  return (
    <div className="greeting-container">
      <span>
        {window.localStorage.getItem("membership")!= null ? (
          <>
            <span className="active-membership">
              {t("homepage:userGreeting.active")}
            </span>
            <p>
              {`${t(
              "homepage:userGreeting.expiry"
            )} ${window.localStorage.getItem("membership")}`}
            </p>
          </>
        ) : (
          <span className="raleway">
            {t("homepage:userGreeting.noSubs")}
            <br />
            <Link to="membership" className="member-link">
              {t("homepage:userGreeting.subscribe")}
            </Link>
          </span>
        )}
      </span>
      {/* <Link to="/profile"><img className="profile-picture" src={image} alt={fullName} /></Link> */}
    </div>
  );
}

export default UserGreeting;
