// History
// Billing
// membership card
// Check-Ins
// check-in card

import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import Billing from "./Billing";
// import CheckIns from "./CheckIns";
import Historic from "../Style/SVG/Profile/SVG_Screen Perfil-04_icon white.svg";
import ArrowLeft from "../Style/SVG/Profile/SVG_Screen Perfil-06_seta branca-01.svg";
import { AuthContext } from "../../contexts/AuthContext";
import "./profile.css";
import Mug from "../Style/SVG/Profile/SVG_Screen Confirmar Subscrição -01_ilustration mug-01.svg";
import {
  ArrowL,
  HistoricIcon,
  HeaderEdit,
  EditTitle,
  ManageButton,
  HistButton,
  LogoHistory,
  ImgDiv,
} from "./Styles";

const History = () => {
  const { user } = useContext(AuthContext);
  console.log("object", user);
  const { t } = useTranslation(["profile"]);
  // console.log(user)
  const id = Number(user.id);

  return (
    <div className="bg-white-profile">
      <HeaderEdit>
        <EditTitle>
          <Link to={`/profile/${id}`}>
            <ArrowL src={ArrowLeft} alt="arrow-back" />
          </Link>
          {t("profile:history.history")}
          <HistoricIcon src={Historic} alt="history-icon" />
        </EditTitle>
      </HeaderEdit>
      <ImgDiv>
        <LogoHistory src={Mug} alt="mug" />
      </ImgDiv>
      <div>
        <HistButton
          method="POST"
          action="/stripe-webhook/create-customer-portal-session"
        >
          <p>
            {t("profile:history.paragraph")}
          </p>
          <ManageButton type="submit">{t("profile:history.billings")}</ManageButton>
        </HistButton>
      </div>
    </div>
  );
};

export default History;
