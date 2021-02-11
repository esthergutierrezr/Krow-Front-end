import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

function UserGreeting() {
  const { t } = useTranslation(["homepage"]);

  const { user } = useContext(AuthContext);

  return (
    <div className="greeting-container">
      <span>
        {user.membership_id ? "Active membership!"
          : (<span style={{color:'#940000'}}> 
              No active membership 
              <br /> 
              <Link to="membership">Click here to buy a plan</Link> 
            </span>)
        }
      </span>
      {/* <Link to="/profile"><img className="profile-picture" src={image} alt={fullName} /></Link> */}
    </div>
  );
}

export default UserGreeting;
