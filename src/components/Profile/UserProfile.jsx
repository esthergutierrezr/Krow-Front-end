import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import picture from "../Style/SVG/HomePage/SVG_Screen Registar-01.svg";
import { AuthContext } from "../../contexts/AuthContext";
import "./profile.css";
import { HeadersProfile } from "../Style/Backgrounds";
import {
  ProfilePhoto,
  Greeting,
  BlackBox,
  ProfileMember,
  IsMember,
  NotMember,
  BuyMember,
} from "./Styles";

function UserProfile() {
  const { user } = useContext(AuthContext);
  // const { member, setMember } = useState(false);
  const { member, setMember } = useState(true);


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
        <div>
          {!member ? (
            <IsMember>
              <p>Active Subscription</p>
              <p>Expire in (date to expire membership)</p>
            </IsMember>
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
        </div>
      </>
    </HeadersProfile>
  );
}

export default UserProfile;
