/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Content = styled.div`
  h1 {
    font-size: 1.5em;
    color: #fbbc05;
    background: #1e847b;
    height: 80hv;
  }
  h2{
    font-size: 1em;
    color: #fbbc05;
    background: #1e847b;
    height: 80hv;
  }

  /*Func*/

  .item ul,
  .nav input[type="checkbox"] {
    display: none;
  }
  #menu:checked ~ .multi-level,
  .item input:checked ~ ul {
    display: block;
  }

  /*Arrow*/

  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    float: right;
    margin-top: 20px;
    margin-right: 20px;
  }
  .arrowBack {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    float: left;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  /*Styles*/

  label:hover {
    cursor: pointer;
  }
  .label-top {
    width: auto;
    display: block;
    z-index: 3;
    position: relative;
    border-bottom: 1px solid #cfd8dc;
  }
  .label-bottom {
    width: auto;
    display: block;
    z-index: 3;
    position: relative;
    color: #cfd8dc;
  }
  .active {
    color: #fff;
    background-color: #1e847b;
  }
  .nav {
    text-decoration: none;
    width: 100%;
    background-color: white;
    overflow-x: hidden;
    margin: 0 2em 0 2em;
  }

  .nav ul,
  .nav li,
  label {
    line-height: 50px;
    margin: 0;
    padding: 0 2em;
    list-style: none;
    text-decoration: none;
    font-weight: 100;
    width: 100%;
  }
  .item ul {
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  label,
  li {
    border-bottom: 1px solid #cfd8dc;
  }
`;

export const Header = styled.div`
  h1 {
    font-size: 1.5em;
    color: #fff;
    background: #3d8fff;
    height: 40px;
    justify-content: center;
    align-items: center;
  }

  /*Arrow Left*/

  .arrowleft {
    width: 15px;
    height: 15px;
    color: gray;
    vertical-align: middle;
    float: left;
    z-index: 0;
    margin: 17px 1em 0 2em;
  }
`;
