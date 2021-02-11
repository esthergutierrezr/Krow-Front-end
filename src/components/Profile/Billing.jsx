import React from "react";

export default function Billing() {
  return (
    <div>
      <form
        method="POST"
        action="/stripe-webhook/create-customer-portal-session"
      >
        <button type="submit">Manage billing</button>
      </form>
      ;
    </div>
  );
}
