import React from "react";
import PackagesAvailable from "../PackagesAvailable";
import PackageCards from "../PackageCards/PackageCards";

import "./PackagesDisplay.css";

const PackagesDisplay = () => {
  return (
    <div>
      <div className="white-bg"></div>
      <div className="color-bg">
        {PackagesAvailable.map((membership) => (
          <PackageCards {...membership} />
        ))}
      </div>
    </div>
  );
};

export default PackagesDisplay;
