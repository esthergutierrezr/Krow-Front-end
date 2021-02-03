import styled from "styled-components";
import WhiteWall from "./bg/white_wall.png";
import Laptop from "./bg/computer-bg.png";
import { Black, HeaderBg, Red } from "./Colors";

export const HeadersBg = styled.div`
  // width: 100%;
  height: 112.2px;
  margin: 0 0 43.8px;
  padding: 22px 41.3px 21.5px 41px;
  background-color: ${HeaderBg};
`;
export const FooterBg = styled.div`
  width: 479.8px;
  height: 82.6px;
  margin: 72.8px 0.2px 0.4px 0;
  padding: 19.2px 221.1px 11.2px 223.2px;
  background-color: ${Black};
`;
export const WhiteWallBg = styled.div`
  position: relative;
  width: 480px;
  height: 130.3px;
  align-self: center;
  background-size: contain;
  background: url(${WhiteWall});
`;
export const LaptopBg = styled.img`
  position: relative;
  width: 100%;
  height: 100vh;
  align-self: center;
  background-size: contain;
  background: url(${Laptop});
`;
export const InviteBg = styled.div`
  width: 480px;
  height: 722.7px;
  margin: 63.1px 0 0;
  padding: 193.6px 0 0 0.7px;
  background-color: ${Red};
`;
