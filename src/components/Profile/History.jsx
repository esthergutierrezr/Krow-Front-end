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
import {
  ArrowL,
  HistoricIcon,
  HeaderEdit,
  EditTitle,
  HistTitle,
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
      <HistTitle>
        <h1>Log-ins</h1>
        <h1>Transactions</h1>
      </HistTitle>

      <div>
      </div>
    </div>
  );
};

export default History;
