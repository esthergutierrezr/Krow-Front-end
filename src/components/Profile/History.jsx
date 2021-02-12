// History
// Billing
// membership card
// Check-Ins
// check-in card

import React, { useContext } from "react";
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
  // console.log(user)
  const id = Number(user.id);

  return (
    <div className="bg-white-profile">
      <HeaderEdit>
        <EditTitle>
          <Link to={`/profile/${id}`}>
            <ArrowL src={ArrowLeft} alt="arrow-back" />
          </Link>
          History
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
          <h3>
            Check your billings, invoices and manage your membership plan, please click on
            button.
          </h3>
          <ManageButton type="submit">Manage billing</ManageButton>
        </HistButton>
      </div>
    </div>
  );
};

export default History;
