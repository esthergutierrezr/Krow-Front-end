/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Content = styled.div`
  h1{
      font-size: 1.5em;
      color: #FBBC05;
      background: #1E847B;
      height: 80hv;
  }

/*Func*/

 .item ul, .nav input[type="checkbox"] {
    display: none;
}
#menu:checked ~ .multi-level, .item input:checked ~ ul {
    display: block;
}

/*Arrow*/

.arrow {
    width: 15px;
    height: 15px;
    color: #000;
    margin-top: 15px;
}
.item input + .arrow {
    transform: rotate(90deg);
    transition: 0.1s;
}
.item input:checked + .arrow {
    transform: rotate(270deg);
    transition: 0.1s;
}

/*Styles*/

label:hover {
    cursor: pointer;
}
.label-top {
    width: 100%;
    display: block;
    z-index: 3;
    position: relative;
    border-bottom: 1px solid #CFD8DC;

}
.label-bottom {
    width: 100%;
    display: block;
    z-index: 3;
    position: relative;
    color: #CFD8DC;
}
.active{
    color:#fff;
    background-color: #1E847B;
}
.nav {
    text-decoration: none;
    width: 100%;
    background-color: white;
    overflow-x: hidden;
    margin: 0 2em 0 2em;
}

.nav ul, .nav li, label {
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

a{
    text-decoration: none;
}

label, li {
    border-bottom: 1px solid #CFD8DC;

}

`;

export const Header = styled.div`
  h1{
      font-size: 1.5em;
      color: #fff;
      background: #3D8FFF;
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

`