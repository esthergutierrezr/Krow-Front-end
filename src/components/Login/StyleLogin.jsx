import styled from "styled-components";

import { White, YellowButton, Black, GrayBorder } from "../Style/Colors";

// ************ Login

export const Logo = styled.img`
  height: 78.3px;
  width: 163px;
  margin-top: 83px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-top: 3em;
  color: ${White};

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
  }

  input {
    width: 303px;
    height: 54.9px;
    margin: 0 0 15.1px;
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

export const PasswordLink = styled.p`
  height: 17px;
  color: ${White};
  font-family: Raleway;
  font-size: 14.4px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: normal;

  hr{
    width: 170px;

  }
`;

export const RegisterLink = styled.p`
  color: ${YellowButton};
`;

export const GuestLink = styled.p`
  color: ${YellowButton};
  margin-top: 80px;
`;

// ************ Forget Password

export const ForgetForm = styled.form`
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
    color: ${White};
  }
  p {
    color: ${White};
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
    margin: 21.6px 72.4px 48.5px 77.2px;
  }
  input {
    width: 336px;
    height: 54.9px;
    margin: 0 0 15.1px;
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
`;
export const SendEmailPass = styled.button`
  background-color: ${White};
  width: 360px;
  height: 54.9px;
  color: ${Black};
  font-family: Raleway;
  font-size: 16.5px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  margin: 30px 0 0px 0;
  border-radius: 11.9px;

  @media only screen and (max-width: 370px) {
    width: 300px;
  }
`;
