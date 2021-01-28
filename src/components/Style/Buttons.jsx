import styled from "styled-components";

import { BlackButton, YellowButton, White } from "./Colors";

export const Button = styled.button`
  yellow-button {
    width: 303px;
    height: 54.9px;
    background-color: ${YellowButton};
  }
  share-code-black {
    width: 237.7px;
    height: 58.5px;
    margin: 19.6px 120.5px 21.1px 121.1px;
    padding: 10.8px 62.1px 12.3px 62.1px;
    background-color: ${BlackButton};
  }
  code-input {
    width: 480px;
    height: 853px;
    padding: 44px 0 0;
    background-color: ${White};
  }
  copy-code {
    width: 76.3px;
    height: 41.9px;
    margin: 0px 0 0 10.1px;
    padding: 11px 13px 11.9px 14.3px;
    background-color: ${YellowButton};
  }

`;
