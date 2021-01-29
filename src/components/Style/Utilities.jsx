import styled from "styled-components";

import { GrayInput, Red } from "./Colors";

export const Input = styled.input`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 285px;
  height: 54.9px;
  background-color: ${GrayInput};
  font-family: Raleway;
  font-size: 17.2px;
  color: #898884;
  padding: 0 18px;
  // margin-top: 79.4px;
`;

export const Arrow = styled.div`
border: solid;
border-width: 0 3px 3px 0;
display: inline-block;

  arrow-left-invite {
    width: 14.5px;
    height: 23.2px;
    margin: 0 71.5px 14.8px 36px;
    background-color: ${Red};
  }

`;
