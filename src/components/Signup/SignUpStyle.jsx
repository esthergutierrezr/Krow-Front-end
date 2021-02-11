/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

import { YellowButton, Black, GrayText, TextInput } from "../Style/Colors";

export const Logo = styled.img`
  height: 78.3px;
  width: 163px;
  margin-top: 83px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Register = styled.button`
  background-color: ${YellowButton};
  margin-left: auto;
  margin-right: auto;
  width: 285px;
  color: ${Black};
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-size: 17.2px;
  padding: 0 18px;
`;

export const Input = styled.input`
  .phone {
    width: 100px;
  };

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 249px;
  height: 54.9px;
  background-color: ${GrayText};
  font-family: Raleway;
  font-size: 17.2px;
  color: ${TextInput};
  padding: 0 18px;
`;