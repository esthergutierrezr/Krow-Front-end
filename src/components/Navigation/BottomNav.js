import React from "react";
import { NavLink } from "react-router-dom";
import LiveChat from "./LiveChat";
import laptop from "./nav-icons/computer-laptop.svg";

import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className="nav">
      <div className="item">
        <NavLink
          to="/locations"
          className="disabled-link"
          activeClassName="active-link active2"
        >
          <div className="item-elements">
            <img src={laptop} alt="Locations" height="40px" width="40px" />
            Trabalhar
          </div>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          to="/invite"
          className="disabled-link"
          activeClassName="active-link active2"
        >
          <div className="item-elements">
            <img
              src="data:image/png;base64,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"
              alt="Refer a friend"
              height="40px"
              width="40px"
            />
            Convidar
          </div>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          exact
          to="/"
          className="disabled-link"
          activeClassName="active-link active2"
        >
          <div className="item-elements">
            <img
              src="https://img.icons8.com/ios/452/k.png"
              alt="Home"
              height="40px"
              width="40px"
            />
            Home
          </div>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          to="/profile"
          className="disabled-link"
          activeClassName="active-link active2"
        >
          <div className="item-elements">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cP6ItC1WplPtJvHlsTSefy8MNPz51_hd4w&usqp=CAU"
              alt="Profile"
              height="40px"
              width="40px"
            />
            Perfil
          </div>
        </NavLink>
      </div>
      <div className="item">
        <div style={{ height: "40px", width: "80px" }}>
          <div style={{ color: "rgb(26, 26, 26)" }}>............</div>
          <LiveChat />
        </div>
      </div>
    </div>
  );
};
export default BottomNav;
