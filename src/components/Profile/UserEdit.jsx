import React, { useContext } from "react";
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
  Greeting,
} from "./Styles";

function UserEdit() {
  const { user } = useContext(AuthContext);

  const initialGreeting = `Hey, ${user.fullName}`;

  return (
    <HeaderEdit>
      <div>
        <EditTitle>
          <Link to={`/profile/${user.id}`}>
            <ArrowL src={ArrowLeft} alt="arrow-back" />
          </Link>
          Edit Profile
          <WheelIcon src={Wheel} alt="wheel-icon" />
        </EditTitle>
        <Greeting>{initialGreeting}</Greeting>
        <EditPhoto
          src={!user.image ? picture : user.image}
          alt={`${user.fullName}`}
        />
      </div>
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
    </HeaderEdit>
  );
}

export default UserEdit;
