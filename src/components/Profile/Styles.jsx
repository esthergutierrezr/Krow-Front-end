/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Content = styled.div`
  h1{
      font-size: 1.5em;
      color: #fff;
      background: #3D8FFF;
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
    color: gray;
    vertical-align: middle;
    float: right;
    z-index: 0;
    margin: 17px 1em 0 2em;
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
label {
    width: 100%;
    display: block;
    z-index: 3;
    position: relative;
    border-bottom: 1px solid #CFD8DC;

}
.nav {
    text-decoration: none;
    width: 100%;
    background-color: white;
    overflow-x: hidden;
}

.nav ul, .nav li, label {
    line-height: 50px;
    margin: 0;
    padding: 0 2em;
    list-style: none;
    text-decoration: none;
    color: #90A4AE;
    font-weight: 100;
    width: 100%;

}
.item ul {
    padding: 0 0.5em;
}

a{
    text-decoration: none;
}

label, li {
    border-bottom: 1px solid #CFD8DC;

}
.nav li a {
    line-height: 50px;
    margin: 0;
    padding: 0 0.5em;
    list-style: none;
    text-decoration: none;
    color: #90A4AE;
    font-weight: 100;
}
`;

export const Header = styled.div`
  h1{
      font-size: 1.5em;
      color: #fff;
      background: #3D8FFF;
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
    color: gray;
    vertical-align: middle;
    float: right;
    z-index: 0;
    margin: 17px 1em 0 2em;
}
.item input + .arrow {
    transform: rotate(90deg);
    transition: 0.1s;
}
.item input:checked + .arrow {
    transform: rotate(270deg);
    transition: 0.1s;
}
`