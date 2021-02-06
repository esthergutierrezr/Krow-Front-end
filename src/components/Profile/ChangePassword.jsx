import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Content,
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
  FormChange,
} from "./Styles";
import picture from "../Style/SVG/HomePage/SVG_Screen Registar-01.svg";
import Wheel from "../Style/SVG/Profile/SVG_Screen Perfil-01_icon white.svg";
import ArrowLeft from "../Style/SVG/Profile/SVG_Screen Perfil-06_seta branca-01.svg";
import "./profile.css";

const ChangePassword = () => {
  const { user, setUser } = useContext(AuthContext);
  const id = Number(user.id);
  const history = useHistory();
  const { member } = useState(false);

  const initialGreeting = `Hey, ${user.fullName}`;

  // const handleSubmit = () => {
  //   axios
  //     .post(`/password/change`, newPassword)
  //     .then((response) => {
  //       // console.log("response",response);
  //     })
  //     .catch((error) => console.error(error));
  //       alert("Password has been Changed Successfully");
  //       history.push(`/profile/${id}`);
  // };

  return (
    <Content>
      <div className="bg-white-profile">
        <HeaderEdit>
          <div>
            <ChangeTitle>
              <Link to={`/profile/${user.id}`}>
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
              {/* <BlackBox>
              <h2>Welcome to Krow</h2>
            </BlackBox> */}
              <NotMember>No Active Membership</NotMember>
              <Link to="/membership">
                <BuyMember>Add a Membership</BuyMember>
              </Link>
            </div>
          )}
        </CenterDivChange>
        <FormChange>
          <h1>Password</h1>
          {/* <form
            onSubmit={(e) => {
              UpdatePassword(e);
            }}> */}
            <input type="password" placeholder="Old Password" />

            <br />

            <input
              // onChange={handleChange} change password
              type="password"
              placeholder="New Password"
            />

            <br />

            <input
              // onChange={handleChange} check password
              type="password"
              placeholder="Confirm New Password"
            />

            <br />
            <Link to="/password/reset">
              <p>Forget Password</p>
            </Link>
            <br />
            <button type="submit">Change Password</button>
        </FormChange>
      </div>
    </Content>
  );
};

export default ChangePassword;
