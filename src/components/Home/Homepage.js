import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Greeting from "./greeting/Greeting";
import CTAButtons from "./CTAButtons";
import CommunityUpdates from "./communityUpdates/CommunityUpdates";
import FeaturedLocations from "./featuredLocations/FeaturedLocations";
import ImportantMessage from "./ImportantMessage";
import { AuthContext } from "../../contexts/AuthContext";
import "./homepage.css";
import { HeadersBg } from "../Style/Backgrounds.jsx";

const Homepage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div homepage>
      <HeadersBg>
      <h2 className="welcome">Welcome to Krow</h2>
      <Greeting />
      </HeadersBg>
      <div className="bg-white">
        <CTAButtons />
        <h2>Community updates</h2>
        <CommunityUpdates />
        <p className="home__featured-locations">
          <h2>Featured Locations</h2>
          <Link id="home__view-all-locations" to="/locations">
            view all
          </Link>
        </p>
        <FeaturedLocations />
        <ImportantMessage />
      </div>
    </div>
  );
};

export default Homepage;
