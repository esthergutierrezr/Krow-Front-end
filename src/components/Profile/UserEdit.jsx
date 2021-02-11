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
  EditTitle,
  EditPhoto,
  GreetingEdit,
  IsMember,
  NotMember,
  BuyMember,
  ExpireTime,
  Circle,
  CenterDiv,
} from "./Styles";

function UserEdit() {
  const { user } = useContext(AuthContext);
  const { member } = useState(false);
  const { t } = useTranslation(["profile"]);


  const initialGreeting = `${t("profile:userEdit.greeting")}, ${user.fullName}`;

  return (
    <>
      <HeaderEdit>
 
          <EditTitle>
            <Link to={`/profile/${user.id}`}>
              <ArrowL src={ArrowLeft} alt="arrow-back" />
            </Link>
            {t("profile:userEdit.editProfile")}
            <WheelIcon src={Wheel} alt="wheel-icon" />
          </EditTitle>
          <EditPhoto
            src={!user.image ? picture : user.image}
            alt={`${user.fullName}`}
          />
      
      </HeaderEdit>
      <GreetingEdit>{initialGreeting}</GreetingEdit>
      <CenterDiv>
        <br/>
        <br/>
        {member ? (
          <div>
            <IsMember>
              {" "}
              <Circle />
              {t("profile:userEdit.subscription")}
            </IsMember>
            <ExpireTime>{`${t("profile:userEdit.expiry")} (date to expire membership)`}</ExpireTime>
          </div>
        ) : (
          <div>
            {/* <BlackBox>
              <h2>Welcome to Krow</h2>
            </BlackBox> */}
            <NotMember>{t("profile:userEdit.noMembership")}</NotMember>
            <Link to="/membership">
              <BuyMember>{t("profile:userEdit.addMembership")}</BuyMember>
            </Link>
          </div>
        )}
      </CenterDiv>
    </>
  );
}

export default UserEdit;
