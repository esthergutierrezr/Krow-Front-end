import React from "react";
import PackageCards from "./PackageCards";
import PackagesAvailable from "./PackagesAvailable";

const Membership = () => {
  return (
    <div>
      {PackagesAvailable.map((membership) => (
        <PackageCards {...membership} />
      ))}
    </div>
  );
};

export default Membership;
