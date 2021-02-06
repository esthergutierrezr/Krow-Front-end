import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import picture from "../Style/SVG/HomePage/SVG_Screen Registar-01.svg";
import Wheel from "../Style/SVG/Profile/SVG_Screen Perfil-01_icon.svg";
import { AuthContext } from "../../contexts/AuthContext";
import ArrowLeft from "../Style/SVG//Profile/SVG_Screen Perfil-06_seta branca-01.svg";
import "./profile.css";
import {
  ArrowL,
  WheelIcon,
  HeaderEdit,
  EditTitle,
  EditPhoto,
  GreetingEdit,
  BlackBox,
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


  const initialGreeting = `Hey, ${user.fullName}`;

  return (
    <>
      <HeaderEdit>
        <div>
          <EditTitle>
            <Link to={`/profile/${user.id}`}>
              <ArrowL src={ArrowLeft} alt="arrow-back" />
            </Link>
            Edit Profile
            <WheelIcon src={Wheel} alt="wheel-icon" />
          </EditTitle>
          <EditPhoto
            src={!user.image ? picture : user.image}
            alt={`${user.fullName}`}
          />
        </div>
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
              Active Subscription
            </IsMember>
            <ExpireTime>Expire in (date to expire membership)</ExpireTime>
          </div>
        ) : (
          <div>
            <BlackBox>
              <h2>Welcome to Krow</h2>
            </BlackBox>
            <NotMember>No Active Membership</NotMember>
            <Link to="/membership">
              <BuyMember>Add a Membership</BuyMember>
            </Link>
          </div>
        )}
      </CenterDiv>
    </>
  );
}

export default UserEdit;
