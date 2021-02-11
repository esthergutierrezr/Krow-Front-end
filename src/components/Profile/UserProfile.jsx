import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import picture from "../Style/SVG/HomePage/SVG_Screen Registar-01.svg";
import { AuthContext } from "../../contexts/AuthContext";
import "./profile.css";
import {
  ProfilePhoto,
  HeadersProfile,
  Greeting,
  BlackBox,
  IsMember,
  NotMember,
  BuyMember,
  ExpireTime,
  Circle,
  MemberDiv,
} from "./Styles";

function UserProfile() {
  const { user } = useContext(AuthContext);
  const { member } = useState(false);
  const { t } = useTranslation(["profile"]);

  const initialGreeting = `Hey, ${user.fullName}`;

  return (
    <HeadersProfile>
      <div>
        <Greeting>{initialGreeting}</Greeting>
        <ProfilePhoto
          src={!user.image ? picture : user.image}
          alt={`${user.fullName}`}
        />
      </div>
      <>
        {member ? (
          <MemberDiv>
            <IsMember>
              {" "}
              <Circle />
              {t("profile:userProfile.activeMembership")}
            </IsMember>
            <ExpireTime>
              {t("profile:userProfile.expiry")} (date to expire membership)
            </ExpireTime>
          </MemberDiv>
        ) : (
          <MemberDiv>
            <BlackBox>
              <h2>Welcome to Krow</h2>
            </BlackBox>
            <NotMember>{t("profile:userProfile.noMembership")}</NotMember>
            <Link to="/membership">
              <BuyMember> {t("profile:userProfile.buyMembership")}</BuyMember>
            </Link>
          </MemberDiv>
        )}
      </>
    </HeadersProfile>
  );
}

export default UserProfile;
