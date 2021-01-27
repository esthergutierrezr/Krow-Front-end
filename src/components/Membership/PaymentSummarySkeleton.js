import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./Style";

const PaymentSummarySkeleton = (props) => {
  const { name, taxedPrice, price, validity } = props;
  const [termsAndConditions, setTermsAndContitions] = React.useState(false);
  const [autoRenew, setAutoRenew] = React.useState(true);
  const handleTermsChange = () => {
    setTermsAndContitions(!termsAndConditions);
  };
  const handleRenewChange = () => {
    setAutoRenew(!autoRenew);
  };
  return (
    <div>
      <div>{name}</div>
      <div>{validity}</div>
      <div>
        <input
          type="text"
          placeholder="Código promocional?"
          style={{
            borderRadius: "0.3rem",
            border: "1px solid rgba(0,0,0, 0.2)",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        />
        <StyledButton dark>Aplicar</StyledButton>
      </div>
      <div>Valor base {price}€</div>
      <div>IVA 23% {(price * 0.23).toFixed(2)}€</div>
      <div style={{ fontWeight: "bold" }}>Valor total {taxedPrice}€</div>
      <input
        type="checkbox"
        value={termsAndConditions}
        checked={termsAndConditions}
        onChange={handleTermsChange}
      />
      Eu concordo com os{" "}
      <Link to="/membership/terms-and-conditions">
        Termos & Condições da Krow
      </Link>
      .
      <div>
        <input
          type="checkbox"
          checked={autoRenew}
          onChange={handleRenewChange}
        />
        <Link to="/membership/auto-renew">Auto-renovar</Link> a minha subscrição
      </div>
      <div>
        <button
          style={{
            border: "none",
            borderRadius: "0.2em",
            fontSize: "0.9rem",
            padding: "5px 0px",
            width: "140px",
            backgroundColor: "#f9c85f",
          }}
          disabled={termsAndConditions ? true : false}
        >
          <span>
            <Link
              to="/membership/payment-method"
              style={{ textDecoration: "none", color: "#65493e" }}
              onClick={!termsAndConditions ? (e) => e.preventDefault() : null}
            >
              Pagamento
            </Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PaymentSummarySkeleton;
