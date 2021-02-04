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
  margin-top: -90px;
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
export const BlackBox = styled.div`
  margin: -35px 0 10px 0;
  width: 165.8px;
  justify-content: center;
  align-items: center;
  height: 31.3px;
  padding: 5px 6.2px 0 8.6px;
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
  /*Arrow*/

  //   .arrow {
  //     border: solid black;
  //     border-width: 0 3px 3px 0;
  //     display: inline-block;
  //     padding: 3px;
  //     float: right;
  //     margin-top: 20px;
  //     margin-right: 20px;
  //   }
  //   .arrowBack {
  //     border: solid black;
  //     border-width: 0 3px 3px 0;
  //     display: inline-block;
  //     padding: 3px;
  //     float: left;
  //     margin-top: 20px;
  //     margin-left: 10px;
  //     margin-right: 10px;
  //   }
  //   .left {
  //     transform: rotate(135deg);
  //     -webkit-transform: rotate(135deg);
  //   }
  //   .down {
  //     transform: rotate(45deg);
  //     -webkit-transform: rotate(45deg);
  //   }
`;

export const ArrowD = styled.img`
  width: 18.5px;
  height: 11.6px;
  padding-left: 70.6px;
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
  color:#fff;
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
