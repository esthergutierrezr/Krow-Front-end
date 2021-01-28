import styled from "styled-components";

import { GrayInput, Red } from "./Colors";

export const Input = styled.input`
  width: 303px;
  height: 54.9px;
  background-color: ${GrayInput};
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
