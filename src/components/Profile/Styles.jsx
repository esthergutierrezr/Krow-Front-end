/* eslint-disable import/prefer-default-export */

import styled from "styled-components";

import { Yellow, Blue } from "../Style/Colors";

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
  width: 200px;
  height: 31px;
  font-family: Calibrib;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.3px;
  margin: 79.8px 139.6px 10.3px 160.3px;
`;
export const BlackBox = styled.div`
  margin: -47.5px 0 10px 16px;
  width: 165.8px;
  justify-content: center;
  align-items: center;
  height: 31.3px;
  padding: 8px 0 0 15px;
  background-color: #000;
  font-family: Calibril;
  font-size: 19.3px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.23px;
  color: #f8c861;
`;
export const Circle = styled.div`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color:#f8c861;
  margin: 4px 5.3px 7.4px 0;
  display:inline-flex;
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
  color: #878787;
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
  color: #0d726c;
  border-bottom: solid 1px #0d726c;
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
  height: 541px;
  label {
    padding-left: 75.9px;
    margin-top: 23.9px;
  }
  hr {
    width: 360.3px;
    border-bottom: solid 1px #606060;
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
    color: #fff;
    padding: 10.2px 0 0 38.4px;
  }
  hr {
    width: 360.3px;
    border-bottom: solid 1px #fff;
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
  width: 14.5px;
  height: 23.2px;
  padding-right: 124.4px;
`;
export const WheelIcon = styled.img`
  width: 21.2px;
  height: 21.2px;
  padding-left: 123.3px;
  // color:#fff;
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
  font-family: Calibril;
  font-size: 26.6px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: 0.32px;
  color: #fff;
  margin-top: 34px;
`;
export const LabelBottom = styled.div`
  color: #878787;
  font-size: 19.8px;
  label {
    margin-bottom: 10.7px;
  }
`;
/*Styles*/

//   label:hover {
//     cursor: pointer;
//   }
//   .label-top {
//     width: auto;
//     display: block;
//     // z-index: 3;
//     position: relative;
//     border-bottom: 1px solid #cfd8dc;
//   }
//   .label-bottom {
//     width: auto;
//     display: block;
//     // z-index: 3;
//     position: relative;
//     color: #cfd8dc;
//   }
//   .active {
//     color: #fff;
//     background-color: #1e847b;
//   }
//   .nav {
//     text-decoration: none;
//     width: 100%;
//     height: 80px;
//     background-color: white;
//     overflow-x: hidden;
//     margin: 0 2em 0 2em;
//   }

//   .nav ul,
//   .nav li,
//   label {
//     line-height: 50px;
//     margin: 0;
//     padding: 0 2em;
//     list-style: none;
//     text-decoration: none;
//     font-weight: 100;
//     width: 100%;
//   }
//   .item ul {
//     padding: 0;
//   }

//   a {
//     text-decoration: none;
//   }

//   label,
//   li {
//     border-bottom: 1px solid #cfd8dc;
//   }
// `;

// // export const Header = styled.div`
//   h1 {
//     font-size: 1.5em;
//     color: #fff;
//     background: #3d8fff;
//     height: 40px;
//     justify-content: center;
//     align-items: center;
//   }
// `;
