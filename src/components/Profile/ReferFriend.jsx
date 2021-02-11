import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Black, Red, White, YellowButton } from "../Style/Colors";
import ReferLogo from "../Style/SVG/Invite/SVG_Screen Registar-01.svg";
import "./profile.css";

const Header = styled.div`
  display: flex;
  height: 130.3px;
`;
export const LogoInvite = styled.img`
  height: 200px;
  width: 250px;

  @media only screen and (max-width: 420px) {
    height: 150px;
    width: 200px;
  }
`;
export const ImgDiv = styled.div`
  position: absolute;   
  text-align: center;   
  left: 0;   
  right: 0;   
  margin-top: -47px;   
  margin-bottom: 35.9px; }
`;
export const LogoShare = styled.img`
  width: 35px;
  height: 35px;
  display: inline-block;
  padding-right: 18.9px;
`;
const Content = styled.div`
  width: 100%;
  height: auto;

  .text-refer {
    padding-top: 180px;
    display: flex;
    flex-direction: column;
    margin-bottom: 17.4px;
    margin-left: auto;
    margin-right: auto;
    width: 361px;
    height: 288px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 420px) {
      width: 250px;
      margin-bottom: 100px;
    }
  }
  p {
    font-family: Raleway;
    font-size: 15.4px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: ${White};
    padding: 10px;
  }
  h1,
  h3 {
    font-family: Raleway;
    font-size: 37.9px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: ${White};
    padding: 10px;
  }
  h3 {
    font-size: 14.4px;
    font-weight: bold;
  }
  .share {
    font-family: Raleway;
    font-size: 18.3px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
  }
  .bgRed {
    background-color: ${Red};
    height: 100vh;
    padding-bottom: 55px;
    width: 100%;
  }
  .bgWhite{
    width: 100%;
    background-color: ${White};
  }
`;
export const ButtonCopy = styled.button`
  background-color: ${YellowButton};
  border-radius: 10px;
  border: hidden;
  margin-right: auto;
  margin-left:10.1px;
  margin-top: 17.4px;
  width: 76.3px;
  height:41.9px;
  color: ${Black};
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-size: 16.2px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  }
`;
export const ButtonCode = styled.input`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${White};
  border-radius: 10px;
  border: hidden;
 
  margin-top: 17.4px;
  width: 109.2px;
  height:39.9px;
  color: ${Black};
  font-family: Raleway;
  font-size: 16.2px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  }
`;
export const DivButtons = styled.div`
  text-align: center;
`;
// TODO This style it's for the button to share the code with other apps
// export const ButtonShare = styled.button`
//   background-color: ${BlackButton};
//   border-radius: 10px;
//   border: hidden;
//   margin-left: 121.9px;
//   margin-right: auto;
//   margin-top:19.6px;
//   margin-bottom:21.1px;
//   width: 237.7px;
//   height:58.5px;
//   color: ${White};
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
// }
// `;

const ReferFriend = () => {
  const { t } = useTranslation(["referafriend"]);
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const copyToClipboard = (event) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    event.target.focus();
    setCopySuccess("Copied!");
  };

  const Share = () => {};

  return (
    <Content>
      <Header className="bgwhite" />
      <div className="bgRed">
        <ImgDiv>
          <LogoInvite src={ReferLogo} alt="Krow-logo" />
        </ImgDiv>
        <div className="text-refer">
          <h1>{t("referafriend:header.title")}</h1>
          <h3>{t("referafriend:header.discount")}</h3>
          <p>{t("referafriend:paragraphs.first")}</p>
          <p>{t("referafriend:paragraphs.second")}</p>
          <p>{t("referafriend:paragraphs.third")}</p>
        </div>
        <DivButtons>
          <ButtonCode ref={textAreaRef} type="text" value="Krow21" />
          <ButtonCopy type="button" onClick={copyToClipboard}>
            {t("referafriend:button.copy")}
          </ButtonCopy>
        </DivButtons>
        <br />
        {/* 
        // TODO This button it's to share the code with other apps
        <ButtonShare type="button" onClick={() => Share()}>
          <LogoShare src={ShareCode} alt="share-code" />
          <div className="share">
            <span>{t("referafriend:button.share")}</span>
          </div>
        </ButtonShare> */}
      </div>
    </Content>
  );
};

export default ReferFriend;
