import React from "react";
import { Link } from "react-router-dom";

const PackageCards = (props) => {
  const {
    name,
    checkIns,
    image,
    discountMessage,
    price,
    banner,
    subBanner,
    perks,
  } = props;
  const [viewDetails, setViewDetails] = React.useState(true);
  const handleClick = () => {
    setViewDetails(!viewDetails);
  };
  return (
    <div>
      <div>{checkIns}</div>
      <div>
        <img src={image} alt="krow works" height="50px" width="50px" />
      </div>
      <div>{name}</div>
      <div>{discountMessage}</div>
      <div>
        {price}€ {viewDetails ? "+ IVA" : null}
      </div>
      <div>
        <button onClick={handleClick}>
        {viewDetails ? "Hide details" : "View details"}
        </button>
        {viewDetails ? (
          <div>
            <div>{banner}</div>
            <div>{subBanner}</div>
            <div>
              {perks.map((perk) => (
                <li key={perk.id}>
                  <img
                    src={perk.image}
                    height="10px"
                    width="10px"
                    alt="perks"
                  />
                  <div>{perk.description}</div>
                </li>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <button>
          <span>
            <Link to="/membership/payment-summary">Buy this plan</Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PackageCards;
