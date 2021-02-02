import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ChooseLanguage = () => {
  const { i18n } = useTranslation(["homepage"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <button type="button" onClick={() => changeLanguage("pt")}>
        <Link to="/auth/login">Começar em Português</Link>
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        <Link to="/auth/login">Start in English</Link>
      </button>
    </div>
  );
};

export default ChooseLanguage;
