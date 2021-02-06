import styled from "styled-components";

import { GrayText, Red, TextInput } from "./Colors";

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

export const Arrow = styled.div`
  border: solid;
  border-width: 0 3px 3px 0;
  display: inline-block;

  // arrow-left-invite {
  //   width: 14.5px;
  //   height: 23.2px;
  //   margin: 0 71.5px 14.8px 36px;
  //   background-color: ${Red};
  // }
`;
