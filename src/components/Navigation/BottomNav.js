import React from "react";
import { NavLink } from "react-router-dom";
import LiveChat from "./LiveChat";
// import laptop from "./nav-icons/computer-laptop.svg";
import Laptop from "../Style/SVG/Nav/SVG_Screen Registar-14.svg";
import Invite from "../Style/SVG/Nav/SVG_Screen Registar-13.svg"
import Krow from "../Style/SVG/Nav/SVG_Screen Registar-12.svg"
import Profile from "../Style/SVG/Nav/SVG_Screen Registar-10.svg";
// import {NavStyle} from "./NavStyle"

import "./BottomNav.css";

const BottomNav = () => (
  <div className="nav">
    <div className="item">
      <NavLink
        to="/locations"
        className="disabled-link"
        activeClassName="active-link active2"
      >
        <div className="item-elements">
          <img className="laptop" src={Laptop} alt="Locations" height="40px" width="40px" />
          Work
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
            src={Invite}
            alt="Refer a friend"
            height="40px"
            width="40px"
          />
          Invite
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
            src={Krow}
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
        to="/profile/:id"
        className="disabled-link"
        activeClassName="active-link active2"
      >
        <div className="item-elements">
          <img
            src={Profile}
            alt="Profile"
            height="40px"
            width="40px"
          />
          Profile
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
export default BottomNav;
