import React from 'react';
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom';
import Invite from '../Style/SVG/HomePage/SVG_Screen Registar-03.svg';
import Subscribe from "../Style/SVG/HomePage/SVG_Screen Registar-02.svg"

function CTAButtons() {
  const { t } = useTranslation(["homepage"]);
  return (
    <div className="home__ctabuttons">
      <Link to="/membership">
        <div className="subscribe">
          <img className="ctabuttons__button" src={Subscribe} />
        <p>{t("homepage:CTAButtons.Subscribe")}</p>
        </div>
        </Link>
      <Link to="/invite">
        <div className="invite">
          <img className="ctabuttons__button" src={Invite} alt="refer a friend" />
        <p>{t("homepage:CTAButtons.Invite")}</p>
        </div>
        </Link>
    </div>
  );
}

export default CTAButtons;