import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation(["navbar"]);
  const [activeLink, setActiveLink] = useState({
    locationsSrc: GreyLaptop,
    inviteSrc: GreyInvite,
    homeSrc: OrangeKrow,
    profileSrc: GreyProfile,
  });
  return (
    <div className="nav">
      <div
        className="item"
        onClick={(e) =>
          setActiveLink({
            locationsSrc: OrangeLaptop,
            inviteSrc: GreyInvite,
            homeSrc: GreyKrow,
            profileSrc: GreyProfile,
          })
        }
      >
        <NavLink
          to="/locations"
          className="disabled-link"
          activeClassName="active-link active2"
        >
          <div className="item-elements">
            <img
              className="item-elements-icon"
              src={activeLink.locationsSrc}
              alt="Locations"
              height="36.7px"
              width="52.3px"
            />
            <span>{t("navbar:Work")}</span>
          </div>
        </NavLink>
      </div>
      <div
        className="item"
        onClick={(e) =>
          setActiveLink({
            locationsSrc: GreyLaptop,
            inviteSrc: OrangeInvite,
            homeSrc: GreyKrow,
            profileSrc: GreyProfile,
          })
        }
      >
        <NavLink
          to="/invite"
          className="disabled-link"
          activeClassName="active-link active2"
        >
          <div className="item-elements">
            <img
              className="item-elements-icon"
              src={activeLink.inviteSrc}
              alt="Refer a friend"
              height="36.7px"
              width="42.9px"
            />
            <span>{t("navbar:Invite")}</span>
          </div>
        </NavLink>
      </div>
      <div
        className="item"
        onClick={(e) =>
          setActiveLink({
            locationsSrc: GreyLaptop,
            inviteSrc: GreyInvite,
            homeSrc: OrangeKrow,
            profileSrc: GreyProfile,
          })
        }
      >
        <NavLink
          exact
          to="/"
          className="disabled-link"
          activeClassName="active-link active2"
        >
          <div className="item-elements">
            <img
              className="item-elements-icon"
              src={activeLink.homeSrc}
              alt="Home"
              height="36.7px"
              width="36.7px"
            />
            <span>Home</span>
          </div>
        </NavLink>
      </div>
      <div
        className="item"
        onClick={(e) =>
          setActiveLink({
            locationsSrc: GreyLaptop,
            inviteSrc: GreyInvite,
            homeSrc: GreyKrow,
            profileSrc: OrangeProfile,
          })
        }
      >
        <NavLink
          to="/profile/:id"
          className="disabled-link"
          activeClassName="active-link active2"
        >
          <div className="item-elements">
            <img
              className="item-elements-icon"
              src={activeLink.profileSrc}
              alt="Profile"
              height="36.7px"
              width="36.7px"
            />
            <span>{t("navbar:Profile")}</span>
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
