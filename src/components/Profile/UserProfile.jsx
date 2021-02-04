import React, { useContext } from "react";
import { Link } from "react-router-dom";
import picture from "../Style/SVG/HomePage/SVG_Screen Registar-01.svg";
import { AuthContext } from "../../contexts/AuthContext";
import "./profile.css";
import { HeadersProfile } from "../Style/Backgrounds";
import { ProfilePhoto, Greeting, BlackBox } from "./Styles";

function UserProfile() {
  const { user } = useContext(AuthContext);

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
      <BlackBox>
        <h2>Welcome to Krow</h2>
      </BlackBox>
      {/* <div>
        <div>
          <p>Active Membership</p>
          <p>Expire in (time to expire membership)</p>
        </div>
        <div>
          <p>No Active Membership</p>
          <Link to="/membership">
            <p>Add a Membership</p>
          </Link>
        </div>
      </div> */}
    </HeadersProfile>
  );
}

export default UserProfile;
