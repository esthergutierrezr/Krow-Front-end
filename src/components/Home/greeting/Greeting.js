import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
import { AuthContext } from '../../../contexts/AuthContext';
import { HeadersBg } from "../../Style/Backgrounds";
import ProfilePic from "../../Style/SVG/HomePage/SVG_Screen Registar-01.svg";
import styled from 'styled-components';

// This component renders a component according to the log-in and membership status of the user.

const ProfilePicture = styled.div`


`;

function Greeting() {
  const { user } = useContext(AuthContext)
  const { t } = useTranslation(["homepage"]);
  const initialGreeting = `${t("homepage:userGreeting.Hi")} ${user.fullName}`;
  return (
    <HeadersBg>
      <h2 className="welcome">{user? initialGreeting :t("homepage:homePage.WelcomeToKrow")}</h2>
        <Link to="/auth/login" className="profile-picture"><img  src={ProfilePic} alt="" /></Link>
      {user ? <UserGreeting {...user} /> : <GuestGreeting />}
    </HeadersBg>
  );
}

export default Greeting;
