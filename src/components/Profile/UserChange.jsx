import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import picture from "../Style/SVG/HomePage/SVG_Screen Registar-01.svg";
import Wheel from "../Style/SVG/Profile/SVG_Screen Perfil-01_icon white.svg";
import ArrowLeft from "../Style/SVG/Profile/SVG_Screen Perfil-06_seta branca-01.svg";
import "./profile.css";
import {
  ArrowL,
  WheelIcon,
  HeaderEdit,
  EditPhoto,
  ChangeTitle,
  GreetingEdit,
  IsMember,
  NotMember,
  BuyMember,
  ExpireTime,
  Circle,
  CenterDivChange,
  ActiveMember,
} from "./Styles";

function UserChange() {
  const { user } = useContext(AuthContext);
  const id = Number(user.id);
  const { t } = useTranslation(["profile"]);

  const { member } = useState(false);

  const initialGreeting = `${t("profile:userChange.greeting")}, ${user.fullName}`;

  return (
    <>
      <HeaderEdit>
        <ChangeTitle>
          <Link to={`/profile/${id}`}>
            <ArrowL src={ArrowLeft} alt="arrow-back" />
          </Link>
          {t("profile:userChange.changePassword")}
          <WheelIcon src={Wheel} alt="wheel-icon" />
        </ChangeTitle>
        <EditPhoto
          src={!user.image ? picture : user.image}
          alt={`${user.fullName}`}
        />
      </HeaderEdit>
      <GreetingEdit>{initialGreeting}</GreetingEdit>
      <CenterDivChange>
        <br />
        <br />
        {window.localStorage.getItem("membership")!= null ? (
          <ActiveMember>
            <IsMember>
              {" "}
              <Circle />
              {t("profile:userChange.subscription")}
            </IsMember>
            <ExpireTime> {`${t(
                "profile:userProfile.expiry"
              )}   ${window.localStorage.getItem("membership")}`}</ExpireTime>
          </ActiveMember>
        ) : (
          <div>
            <NotMember>{t("profile:userChange.noMembership")}</NotMember>
            <Link to="/membership">
              <BuyMember>{t("profile:userChange.addMembership")}</BuyMember>
            </Link>
          </div>
        )}
      </CenterDivChange>
    </>
  );
}

export default UserChange;
