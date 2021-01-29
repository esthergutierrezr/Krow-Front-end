import React from "react";
import { NavLink } from "react-router-dom";
import LiveChat from "./LiveChat";
// import laptop from "./nav-icons/computer-laptop.svg";
import GreyLaptop from "../Style/SVG/Nav/SVG_Screen Registar-14.svg";
import GreyInvite from "../Style/SVG/Nav/SVG_Screen Registar-13.svg";
import GreyKrow from "../Style/SVG/Nav/SVG_Screen Registar-12.svg";
import GreyProfile from "../Style/SVG/Nav/SVG_Screen Registar-10.svg";
import OrangeLaptop from "../Style/SVG/Nav/SVG_Screen Registar-05.svg";
import OrangeInvite from "../Style/SVG/Nav/SVG_Screen Registar-06.svg";
import OrangeKrow from "../Style/SVG/Nav/SVG_Screen Registar-07.svg";
import OrangeProfile from "../Style/SVG/Nav/SVG_Screen Registar-09.svg";
// import {NavStyle} from "./NavStyle"

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
            <img
              name="locations"
              //  onClick={(e) => handleActivation(e)}
              className="item-elements-icon"
              src={"active-link" ? GreyLaptop : OrangeLaptop}
              alt="Locations"
              height="36.7px"
              width="52.3px"
            />
            <span>Work</span>
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
              className="item-elements-icon"
              src={"active-link" ? GreyInvite : OrangeInvite}
              alt="Refer a friend"
              height="36.7px"
              width="42.9px"
            />
            <span>Invite</span>
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
              className="item-elements-icon"
              src={"active-link" ? OrangeKrow : GreyKrow}
              alt="Home"
              height="36.7px"
              width="36.7px"
            />
            <span>Home</span>
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
              className="item-elements-icon"
              src={"active-link" ? GreyProfile : OrangeProfile}
              alt="Profile"
              height="36.7px"
              width="36.7px"
            />
            <span>Profile</span>
          </div>
        </NavLink>
      </div>
      <div className="item">
        <div>
          <div style={{ color: "#000000" }}>
            <span>............</span>
          </div>
          <LiveChat />
        </div>
      </div>
    </div>
  );
};
export default BottomNav;
