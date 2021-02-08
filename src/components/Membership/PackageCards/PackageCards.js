import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../Style";

import "./PackageCards.css";

const PackageCards = (props) => {
  const { name, image, taxedPrice, validity, perks } = props;
  return (
    <div>
      <div className="mbs-img-container">
        <img src={image} alt="KrowWorks" height="125.9px" width="143.1px" />
      </div>
      <div>
        <div className="mbs-text-title-container">
          <div className="mbs-title">{name}</div>
          <div className="mbs-validity">{validity}</div>
        </div>
        <div>
          <div>
            {perks.map((perk) => (
              <li key={perk.id}>
                <div className="mbs-perks">
                  <img
                    className="mbs-perks-img"
                    src={perk.image}
                    height="15px"
                    width="15px"
                    alt="CheckBox"
                  />
                  {perk.description}
                </div>
              </li>
            ))}
          </div>
        </div>
        <div className="mbs-price">{taxedPrice}€/mês</div>
        <div className="mbs-button">
          <StyledButton>
            <Link
              className="mbs-button-text"
              to="/membership/payment-summary"
              style={{ textDecoration: "none", color: "#65493e" }}
            >
              Subscrever
            </Link>
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default PackageCards;
