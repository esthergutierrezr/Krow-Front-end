import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./Style";

const PackageCards = (props) => {
  const { name, image, taxedPrice, validity, perks } = props;
  return (
    <div>
      <div>
        <img src={image} alt="krow works" height="50px" width="50px" />
      </div>
      <div style={{ fontSize: "2rem" }}>{name}</div>
      <div>
        <div style={{ fontWeight: "bold" }}>{validity}</div>
        <div>
          {perks.map((perk) => (
            <li key={perk.id}>
              <div>
                <img src={perk.image} height="10px" width="10px" alt="perks" />
                {perk.description}
              </div>
            </li>
          ))}
        </div>
      </div>
      <div style={{ fontSize: "2rem" }}>{taxedPrice}€/mês</div>
      <div>
        <StyledButton>
          <Link
            to="/membership/payment-summary"
            style={{ textDecoration: "none", color: "#65493e" }}
          >
            Subscrever
          </Link>
        </StyledButton>
      </div>
    </div>
  );
};

export default PackageCards;
