import React from "react";
import PackagesAvailable from "./PackagesAvailable";
import PackageCards from "./PackageCards";

const PackagesDisplay = () => {
  return (
    <div>
      {PackagesAvailable.map((membership) => (
        <PackageCards {...membership} />
      ))}
    </div>
  );
};

export default PackagesDisplay;
