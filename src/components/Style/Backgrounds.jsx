import styled from "styled-components";
import WhiteWall from "./bg/white_wall.png";
import Laptop from "./bg/computer-bg.png";
import { Black, HeaderGrey, Red, Blue } from "./Colors";

export const HeadersBg = styled.div`
  max-width: 100%;
  height: 112.2px;
  margin: 0 0 43.8px;
  padding: 10px 41px 10px 41px;
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  grid-template-rows: repeat(2, minmax(50px, 1fr));
  background-color: ${HeaderGrey};

.profile-picture{
  display: flex;
  justify-content: flex-end;
  // grid-row-start: 1;
  // grid-row-end: 3;
  // grid-column-start:2;
  // grid-column-end: 3;
}
  
  img{
    width: 88.7px;
    height: 88.7px;
    padding: 7.7px 7.7px 7.7px 7.7px;
  }

  @media screen and (max-width: 380px) {
    .profile-picture{
      display: none;
    }

    grid-template-columns: none;
  }
`;


export const FooterBg = styled.div`
  width: 479.8px;
  height: 82.6px;
  margin: 72.8px 0.2px 0.4px 0;
  padding: 19.2px 221.1px 11.2px 223.2px;
  background-color: ${Black};
`;
