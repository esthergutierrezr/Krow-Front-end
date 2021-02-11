/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

import { YellowButton, Black, White, GrayBorder } from "../Style/Colors";

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

export const ContainerSignUp = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  color: ${White};
  margin-top: 3em;

  p {
    width: 100%;
    height: 39px;
    font-family: Raleway;
    font-size: 16.4px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
  }

  input {
    width: 303px;
    height: 54.9px;
    margin: 24.9px auto 24.9px auto;
    border-radius: 10px;
    border: solid 1px ${GrayBorder};
    text-align: left;
    padding-left: 18.7px;
    background-color: ${GrayBorder};
    opacity: 0.85;
    font-family: Raleway;
    font-size: 19.8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: ${White};

    @media only screen and (max-width: 370px) {
      width: 278px;
    }
  }
  button {
    background-color: ${YellowButton};
    border-radius: 10px;
    border: solid 1px ${YellowButton};
    margin-left: auto;
    margin-right: auto;
    width: 325px;
    height: 54.9px;
    color: ${Black};
    justify-content: center;
    align-items: center;
    font-family: Raleway;
    font-size: 17.2px;
    padding: 0 18px;
    
    @media only screen and (max-width: 370px) {
        width: 298px;
      }
  }
`;
export const LoginText = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
export const RegisterLink = styled.p`
  color: ${YellowButton};
`;

export const GuestLink = styled.p`
  color: ${YellowButton};
  margin-top: 80px;
`;