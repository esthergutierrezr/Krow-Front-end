import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KrowLogo from "../Style/SVG/KrowLogo.svg";
import PTFlag from "../Style/SVG/ChooseLanguage/PT_flag.svg";
import ENFlag from "../Style/SVG/ChooseLanguage/EN_flag.svg";

import "./ChooseLanguage.css";

const Logo = styled.img`
  height: 78.3px;
  width: 163px;
  margin-left: auto;
  margin-right: auto;
`;

const ChooseLanguage = () => {
  const { i18n } = useTranslation(["homepage"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="choose-lng-bg">
      <div className="choose-lng-container">
        <div className="krow-logo">
          <Logo src={KrowLogo} />
        </div>
        <div className="flag-text-container">
          <div onClick={() => changeLanguage("pt")}>
            <Link to="/auth/signup">
              <div className="flag-text pt">
                <img src={PTFlag} alt="PT" width="79px" height="79px" />
                <span>Começar em Português</span>
              </div>
            </Link>
          </div>
          <div onClick={() => changeLanguage("en")}>
            <Link to="/auth/signup">
              <div className="flag-text en">
                <img src={ENFlag} alt="EN" width="79px" height="79px" />
                <span>Start in English</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLanguage;
