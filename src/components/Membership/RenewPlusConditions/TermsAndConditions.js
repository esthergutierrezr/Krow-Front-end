import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <div className="white-bg conditions-header">
        <div className="greenArrow">
          <Link to="/membership/payment-summary">
            <svg>
              <path
                fill="#08726c"
                class="st2"
                d="M5.6,11.6l8.2-7.9c0.9-0.9,0.9-2.2,0-3.1c-0.9-0.9-2.3-0.9-3.2,0l-10,9.5c-0.8,0.8-0.8,2.1,0,2.9l10,9.5
	c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.2,0-3.1L5.6,11.6z"
              />
            </svg>
          </Link>
        </div>
        <div className="conditions-header-title">Terms & Conditions</div>
      </div>
      <div className="conditions-text-body">
        <div className="conditions-paragraph-title">Paragraph Number One:</div>
        <div className="conditions-paragraph-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="conditions-paragraph-title">Paragraph Number Two:</div>
        <div className="conditions-paragraph-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
