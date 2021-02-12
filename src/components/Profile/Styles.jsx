/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

import {
  White,
  Yellow,
  Blue,
  YellowButton,
  Black,
  GrayText,
  GrayBorder,
  BlueMembership,
  WhiteBorder,
} from "../Style/Colors";

// *********************Profile

export const ProfilePhoto = styled.img`
  height: 104px;
  width: 104px;
  float: right;
  margin-top: -25px;
  margin-right: 50.5px;

  @media only screen and (max-width: 480px) {
    margin-right: 10px;
  }
  @media only screen and (max-width: 420px) {
    margin-right: -10px;
  }
  @media only screen and (max-width: 375px) {
    margin-top: -15px;
    height: 74px;
    width: 74px;
  }
  @media only screen and (max-width: 350px) {
    display: none;
  }
`;

export const HeadersProfile = styled.div`
  width: auto;
  height: 112.2px;
  margin-bottom: 43.8px;
  margin-left: auto;
  margin-right: auto;
  padding: 22px 41.3px 21.5px 41px;
  background-color: ${Blue};
  text-align: left;
`;

export const Greeting = styled.h1`
  display: block;
  color: ${Yellow};
  width: 250px;
  height: 31px;
  font-family: Calibrib;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.3px;
  margin-top: 79.8px;
`;
export const Content = styled.div`
  font-family: Calibril;
  font-size: 26.6px;

  /*Func of dropdown menu*/

  .drop-item ul,
  input[type="checkbox"] {
    display: none;
  }
  #menu:checked ~ .multi-level,
  .drop-item input:checked ~ ul {
    display: block;
  }
`;
export const Menu = styled.div`
  width: 362.3px;
  margin-top: 90.4px;
  margin-bottom: 111.8px;
  margin-left: auto;
  margin-right: auto;
  height: 541px;
  @media only screen and (max-width: 370px) {
    height: auto;
    width: auto;
  }
  label {
    width: 360.3px;
    margin-top: 23.9px;
    @media only screen and (max-width: 370px) {
      padding-left: 8px;
      height: auto;
      width: auto;
      margin-left: auto;
      margin-right: auto;
    }
  }
  hr {
    width: 360.3px;
    border-bottom: solid 1px ${WhiteBorder};

    @media only screen and (max-width: 370px) {
      height: auto;
      width: auto;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
export const DropMenu = styled.ul`
  margin-top: -13px;
  padding-top: 10px;
  background-color: ${Blue};
  width: 362.3px;
  height: 116px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 370px) {
    height: auto;
    width: auto;
  }
  li {
    color: ${White};
    padding: 10.2px 0 0 38.4px;
  }
  hr {
    width: 360.3px;
    border-bottom: solid 1px ${White};
    @media only screen and (max-width: 370px) {
      height: auto;
      width: auto;
      margin-left: auto;
      margin-right: auto;
    }
  }
  hr:last-child {
    margin-bottom: 17.2px;
  }
`;
export const WheelProfile = styled.img`
  width: 21.2px;
  height: 21.2px;
  padding-right: 17.4px;
`;
export const CartProfile = styled.img`
  width: 21.2px;
  height: 21.2px;
  padding-right: 17.4px;
  margin-top: 10px;
`;
export const NotificationProfile = styled.img`
  width: 21.2px;
  height: 21.2px;
  padding-right: 17.4px;
  margin-top: 10px;
`;
export const HistoricProfile = styled.img`
  width: 21.2px;
  height: 21.2px;
  padding-right: 17.4px;
  margin-top: 10px;
`;
export const InviteProfile = styled.img`
  width: 21.2px;
  height: 21.2px;
  padding-right: 17.4px;
  margin-top: 10px;
`;
export const LabelBottom = styled.div`
  color: ${GrayText};
  font-size: 19.8px;
  label {
    margin-bottom: 10.7px;
  }
`;

//* ***********************Edit

export const EditPhoto = styled.img`
  height: 104px;
  width: 104px;
  margin-top: 20px;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;
export const GreetingEdit = styled.h1`
  display: block;
  z-index: 3;
  color: ${Blue};
  width: 300px;
  height: 31px;
  font-family: Calibrib;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.3px;
  margin: 79.8px auto 10.3px auto;
  text-align: center;
`;
export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto 126.5px auto;
`;
export const FormEdit = styled.form`
  height: 100%;
  margin: 0px auto 15.1px auto;

  input {
    background: transparent;
    width: 354px;
    height: 54.9px;
    margin: 0 auto 15.1px auto;
    border-radius: 10px;
    border: solid 1px ${GrayBorder};
    text-align: center;
    color: ${Blue};
    font-family: Raleway;
    font-size: 19.8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;

    @media only screen and (max-width: 370px) {
      width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
export const SaveChanges = styled.button`
  background-color: ${YellowButton};
  width: 174.3px;
  height: 54.6px;
  color: ${Black};
  font-family: Raleway;
  font-size: 16.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  margin: 17.4px auto 100.4px 90px;
  border-radius: 11.9px;

  @media only screen and (max-width: 370px) {
    margin-left: 70px;
  }
`;
export const HeaderEdit = styled.div`
  width: auto;
  height: 112.2px;
  margin: 0 0 43.8px;
  padding: 22px 41.3px 21.5px 41px;
  background-color: ${Blue};

  @media only screen and (max-width: 330px) {
    padding-right: 10px;
  }
`;
export const EditTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: Calibril;
  font-size: 26.6px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: 0.32px;
  color: ${White};
  margin-top: 34px;
  margin-right: auto;
  margin-left: auto;
`;

// ****************Change Password

export const CenterDivChange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto 33.4px auto;
`;
export const FormChange = styled.form`
  height: 100%;
  margin: 0px auto 15.1px auto;

  h1 {
    font-family: Calibril;
    font-size: 26.2px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.31px;
    text-align: center;
    margin-bottom: 21.1px;
    color: ${Blue};
  }
  h2 {
    font-family: Calibril;
    font-size: 19.8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.31px;
    text-align: center;
    color: ${Blue};
  }
  input {
    background: transparent;
    width: 354px;
    height: 54.9px;
    margin: 0 0 15.1px;
    border-radius: 10px;
    border: solid 1px ${GrayBorder};
    text-align: center;
    color: ${Blue};
    font-family: Raleway;
    font-size: 19.8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;

    @media only screen and (max-width: 370px) {
      width: 300px;
    }
  }
`;
export const Save = styled.button`
  background-color: ${YellowButton};
  width: 174.3px;
  height: 54.6px;
  color: ${Black};
  font-family: Raleway;
  font-size: 16.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  margin: auto auto 100.4px 90px;
  border-radius: 11.9px;

  @media only screen and (max-width: 370px) {
    margin-left: 70px;
  }
`;
export const ChangeTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: Calibril;
  font-size: 26.6px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: 0.32px;
  color: ${White};
  margin: 34px auto 0 auto;
  @media only screen and (max-width: 350px) {
    margin-right: 10px;
  }
`;

// ****************Common style

export const ActiveMember = styled.div`
  margin-left: 80px;
`;
export const DivEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  @media only screen and (max-width: 370px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
export const MemberDiv = styled.div`
  padding-top: 47.5px
  width: 100%;
  height: 100%;

@media only screen and (max-width: 445px) {
  margin-top: 85xp;
  margin-bottom: 35px;
}
@media only screen and (max-width: 370px) {
  margin-left: auto;
  margin-right: auto;
}
`;
export const BlackBox = styled.div`
  margin: 47.5px 0 10px 16px;
  width: 165.8px;
  justify-content: center;
  align-items: center;
  height: 31.3px;
  padding: 8px 0 0 15px;
  background-color: ${Black};
  font-family: Calibril;
  font-size: 19.3px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.23px;
  color: ${Yellow};
`;
export const Circle = styled.div`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${Yellow};
  margin: 4px 5.3px 7.4px 0;
  display: inline-flex;

  @media only screen and (max-width: 370px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
export const IsMember = styled.p`
  margin: -30px 65.6px 2px -10px;
  font-family: Raleway;
  font-size: 16.4px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  display: inline-flex;
`;
export const ExpireTime = styled.p`
  margin: 4.3px 0 0 5.3px;
  font-family: Raleway;
  font-size: 16.4px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
`;
export const NotMember = styled.p`
  font-family: Calibril;
  font-size: 16.5px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.2px;
  color: ${GrayText};
  padding-left: 18.5px;
  margin: 10px 0;
`;
export const BuyMember = styled.p`
  font-family: Calibril;
  font-size: 16.5px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.2px;
  color: ${BlueMembership};
  border-bottom: solid 1px ${BlueMembership};
  width: 155.5px;
  margin-left: 20px;
`;
export const ArrowD = styled.img`
  width: 18.5px;
  height: 11.6px;
  padding-left: 90.6px;

  // @media only screen and (max-width: 370px) {
  //   padding-left: 90px;
  // }
  @media only screen and (max-width: 340px) {
    padding-left: 70px;
  }
`;
export const ArrowL = styled.img`
  display: flex;
  width: 14.5px;
  height: 23.2px;
`;
export const WheelIcon = styled.img`
  width: 21.2px;
  height: 21.2px;
  display: flex;
  padding-right: 10px;
`;
export const HistoricIcon = styled.img`
  width: 21.2px;
  height: 21.2px;
  display: flex;
  padding-right: 10px;
`;
//* ***********RESET PASSWORD */
export const ArrowBlue = styled.img`
  display: flex;
  width: 14.5px;
  height: 23.2px;
  margin: 44.6px 0 0 40px;
`;
export const Logo = styled.img`
  height: 70px;
  width: 174.7px;
  margin-top: 50.5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const ResetDiv = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0px auto 151.1px auto;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 111px 6.5px 21.6px 11.1px;
    font-family: Calibril;
    font-size: 26.2px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.31px;
    text-align: center;
    color: ${Blue};
  }
  p {
    width: 210px;
    height: 39px;
    font-family: Raleway;
    font-size: 16.4px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    margin: 21.6px auto 48.5px auto;
  }
  input {
    background: transparent;
    width: 354px;
    height: 54.9px;
    margin: 0 0 15.1px;
    border-radius: 10px;
    border: solid 1px ${GrayBorder};
    text-align: center;
    color: ${Blue};
    font-family: Raleway;
    font-size: 19.8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;

    @media only screen and (max-width: 370px) {
      width: 300px;
    }
  }
`;
export const SendEmail = styled.button`
  background-color: ${YellowButton};
  width: 360px;
  height: 54.9px;
  color: ${Black};
  font-family: Raleway;
  font-size: 16.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  margin: 30px 0 0px 0;
  border-radius: 11.9px;
  opacity: 0.6;

  @media only screen and (max-width: 370px) {
    width: 300px;
  }
`;

// ****************History

export const HistButton = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0px auto 151.1px auto;
  justify-content: center;
  align-items: center;

  p{
    width: 300px;
    height: 39px;
    font-family: Raleway;
    font-size: 16.4px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    margin: 21.6px auto 48.5px auto;
  }
`;

export const ManageButton = styled.button`
  background-color: ${YellowButton};
  width: 360px;
  height: 54.9px;
  color: ${Black};
  font-family: Raleway;
  font-size: 16.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  margin: 30px 0 0px 0;
  border-radius: 11.9px;
  opacity: 0.6;

  @media only screen and (max-width: 370px) {
    width: 300px;
  }
`;

export const LogoHistory = styled.img`
  height: 115.9px;
  width: 138.1px;

  // @media only screen and (max-width: 420px) {
  //   height: 150px;
  //   width: 200px;
  // }
`;

export const ImgDiv = styled.div`
  position: relative;   
  text-align: center;   
  margin-left: auto;
  margin-right: auto;
  margin-top: -77px;   
  margin-bottom: 35.9px; }
`;
