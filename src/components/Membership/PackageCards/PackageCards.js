import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { StyledButton } from "../Style";

import "./PackageCards.css";

const PackageCards = (props) => {
  const { name, image, taxedPrice, validity, perks } = props;
  const { t } = useTranslation(["membership"]);

   // TODO remove this it is only for demo purpose
   window.localStorage.setItem("membership", "12-03-2021");

  return (
    <div>
      <div className="mbs-img-container">
        <img src={image} alt="KrowWorks" height="125.9px" width="143.1px" />
      </div>
      <div>
        <div className="mbs-text-title-container">
          <div className="mbs-title">
            {t("membership:packagesAvailable.number1.name")}
          </div>
          <div className="mbs-validity">
            {t("membership:packagesAvailable.number1.validity")}
          </div>
        </div>
        <div>
          <div>
            {perks.map((perk) => (
              <li className="mbs-perks-li" key={perk.id}>
                <div className="mbs-perks">
                  <img
                    className="mbs-perks-img"
                    src={perk.image}
                    height="15px"
                    width="15px"
                    alt="CheckBox"
                  />
                  {t(`membership:packagesAvailable.number1.perks.${perk.id}`)}
                </div>
              </li>
            ))}
          </div>
        </div>
        <div className="mbs-price">
          {taxedPrice}
          {t("membership:packageCards.taxedPrice")}
        </div>
        <div className="mbs-button">
          <StyledButton>
            <Link
              className="mbs-button-text"
              to="/membership/payment-summary"
              style={{ textDecoration: "none", color: "#65493e" }}
            >
              {t("membership:packageCards.subscribe")}
            </Link>
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default PackageCards;
