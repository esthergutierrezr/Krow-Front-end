import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

function UserProfile() {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation(["profile"]);

  const initialGreeting = `Welcome, ${user.fullName}`;

  return (
    <div className="greeting">
      <h1>{initialGreeting}</h1>
      <img
        className="profile-picture"
        src={user.image}
        alt={`${user.fullName}`}
      />
      <br />
      {/* {isMember ? (
        <>
          <p>Active Membership</p>
          <p>
            Expire in
            (time to expire membership)
          </p>
        </>
      ) : ( */}
      <>
        <br />
        <p>{t("profile:userProfile.activeMembership")}</p>
        <br />
        <p>{t("profile:userProfile.expiry")} (time to expire membership)</p>
      </>
      <br />
      <>
        <p className="no-membership">{t("profile:userProfile.noMembership")}</p>
        <br />
        <Link to="/membership">
          <p className="add-membership">
            {t("profile:userProfile.buyMembership")}
          </p>
        </Link>
      </>
      {/* )} */}
    </div>
  );
}

export default UserProfile;
