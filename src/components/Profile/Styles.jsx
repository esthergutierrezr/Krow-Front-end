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

export const ProfilePhoto = styled.img`
  height: 104px;
  width: 104px;
  margin-top: -25px;
  //   display: block;
  margin-right: 50.5px;
  margin-left: 275.5px;
`;

export const EditPhoto = styled.img`
  height: 104px;
  width: 104px;
  margin-top: 20px;
  display: block;
  margin-right: auto;
  margin-left: 150px;
`;
export const Greeting = styled.h1`
  display: block;
  z-index: 3;
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
  margin: 79.8px 0 0 0;
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
  margin: 79.8px auto 10.3px 140.3px;
`;
export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto 126.5px auto;
`;
export const CenterDivChange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto 33.4px auto;
`;
export const ActiveMember = styled.div`
  margin-left: 80px;
`;
export const DivEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
export const FormEdit = styled.form`
  height: 100%;
  margin: 0px 70px 15.1px 60px;

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
  // padding: 0 18px;
  margin: 17.4px auto 100.4px 90px;
  border-radius: 11.9px;
`;
export const FormChange = styled.form`
  height: 100%;
  margin: 0px 70px 15.1px 60px;

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
  h2{
    font-family: Calibril;
    font-size: 19.8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.31px;
    text-align: center;
    // margin-bottom: 29.7px;
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
// padding: 0 18px;
margin: auto auto 100.4px 90px;
border-radius: 11.9px;
`
export const BlackBox = styled.div`
  margin: -47.5px 0 10px 16px;
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
  margin-top: 90.4px;
  margin-bottom: 111.8px;
  height: 541px;
  label {
    padding-left: 75.9px;
    margin-top: 23.9px;
  }
  hr {
    width: 360.3px;
    border-bottom: solid 1px ${WhiteBorder};
  }
`;
export const DropMenu = styled.ul`
  margin-top: -13px;
  margin-left: 74.5px;
  padding-top: 10px;
  background-color: ${Blue};
  width: 362.3px;
  height: 116px;

  li {
    color: ${White};
    padding: 10.2px 0 0 38.4px;
  }
  hr {
    width: 360.3px;
    border-bottom: solid 1px ${White};
  }
  hr:last-child {
    margin-bottom: 17.2px;
  }
`;
export const ArrowD = styled.img`
  width: 18.5px;
  height: 11.6px;
  padding-left: 80.6px;
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

export const HeaderEdit = styled.div`
  width: 100%;
  height: 112.2px;
  margin: 0 0 43.8px;
  padding: 22px 41.3px 21.5px 41px;
  background-color: ${Blue};
`;

export const EditTitle = styled.div`
  width: 414.2px;
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
`;

export const ChangeTitle = styled.div`
  width: 414.2px;
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
`;
export const LabelBottom = styled.div`
  color: ${GrayText};
  font-size: 19.8px;
  label {
    margin-bottom: 10.7px;
  }
`;
