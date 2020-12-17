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
    width: 10px;
    height: 10px;
    vertical-align: middle;
    float: right;
    z-index: 0;
    margin: 17px 1em 0 2em;
}
.item input + .arrow {
    transform: rotate(0deg);
    transition: 0.1s;
}
.item input:checked + .arrow {
    transform: rotate(180deg);
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
    border-bottom: 1px solid #CFD8DC;
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
    border-bottom: 1px solid #CFD8DC;

}
.item ul {
    padding: 0 0.25em;
    text-decoration: none;

    
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
