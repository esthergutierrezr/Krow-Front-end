import React from "react";
import PaymentSummarySkeleton from "./PaymentSummarySkeleton";
import PackagesAvailable from "./PackagesAvailable";

const PaymentSummary = () => {
  return (
    <div>
      {PackagesAvailable.map((membership) => {
        console.log(membership);
        return (
          <div>
            <PaymentSummarySkeleton {...membership} />
          </div>
        );
      })}
    </div>
  );
};

export default PaymentSummary;
