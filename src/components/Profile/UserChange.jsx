import React, { useState, useContext } from "react";
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

  const { member } = useState(false);

  const initialGreeting = `Hey, ${user.fullName}`;

  return (
    <>
      <HeaderEdit>
        <div>
          <ChangeTitle>
            <Link to={`/profile/${id}`}>
              <ArrowL src={ArrowLeft} alt="arrow-back" />
            </Link>
            Change Password
            <WheelIcon src={Wheel} alt="wheel-icon" />
          </ChangeTitle>
          <EditPhoto
            src={!user.image ? picture : user.image}
            alt={`${user.fullName}`}
          />
        </div>
      </HeaderEdit>
      <GreetingEdit>{initialGreeting}</GreetingEdit>
      <CenterDivChange>
        <br />
        <br />
        {!member ? (
          <ActiveMember>
            <IsMember>
              {" "}
              <Circle />
              Active Subscription
            </IsMember>
            <ExpireTime>Expire in 14 April 2021</ExpireTime>
          </ActiveMember>
        ) : (
          <div>
            <NotMember>No Active Membership</NotMember>
            <Link to="/membership">
              <BuyMember>Add a Membership</BuyMember>
            </Link>
          </div>
        )}
      </CenterDivChange>
    </>
  );
}

export default UserChange;
