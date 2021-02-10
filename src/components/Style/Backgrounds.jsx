import styled from "styled-components";
import WhiteWall from "./bg/white_wall.png";
import Laptop from "./bg/computer-bg.png";
import { Black, HeaderGrey, Red, Blue } from "./Colors";

export const HeadersBg = styled.div`
  max-width: 100%;
  height: 112.2px;
  margin: 0 0 43.8px;
  padding: 22px 41.3px 21.5px 41px;
  background-color: ${HeaderGrey};
`;

export const HeadersProfile = styled.div`
  width: 100%;
  height: 112.2px;
  margin: 0 0 43.8px 0;
  padding: 22px 41.3px 21.5px 41px;
  background-color: ${Blue};
`;
export const FooterBg = styled.div`
  width: 479.8px;
  height: 82.6px;
  margin: 72.8px 0.2px 0.4px 0;
  padding: 19.2px 221.1px 11.2px 223.2px;
  background-color: ${Black};
`;
