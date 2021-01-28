/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

import {Black, HeaderBg, Red} from "./Colors"

export const Background = styled.div`
  align-items: center;
  justify-content: center;

  headers-bg{
    width: 480px;
    height: 132.2px;
    margin: 0 0 43.8px;
    padding: 22px 41.3px 21.5px 41px;
    background-color: ${HeaderBg};
  }

  footer-bg{
    width: 479.8px;
    height: 82.6px;
    margin: 72.8px 0.2px 0.4px 0;
    padding: 19.2px 221.1px 11.2px 223.2px;
    background-color: ${Black};
  }

  white-wall {
    position: relative;
    width: 480px;
    height: 130.3px;
    align-self: center;
  }
  computer-bg{
    position: relative;
    width: 480px;
    height: 853px;
    // align-self: center;
  }
  invite-friend-bg{
    width: 480px;
    height: 722.7px;
    margin: 63.1px 0 0;
    padding: 193.6px 0 0 0.7px;
    background-color: ${Red};
  }
`;
