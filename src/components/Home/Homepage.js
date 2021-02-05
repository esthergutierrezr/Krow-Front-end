import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Greeting from "./greeting/Greeting";
import CTAButtons from "./CTAButtons";
import CommunityUpdates from "./communityUpdates/CommunityUpdates";
import FeaturedLocations from "./featuredLocations/FeaturedLocations";
import ImportantMessage from "./ImportantMessage";
import { AuthContext } from "../../contexts/AuthContext";
import "./homepage.css";
import { HeadersBg } from "../Style/Backgrounds.jsx";
import StarRating from "../Reusable/StarRating";

const Homepage = () => {

  const locationId = 24;
  const amountVotes = 10;
  const ratingAVG = 4;

  const { user } = useContext(AuthContext);
  const { t } = useTranslation(["homepage"]);
  return (
    <div homepage>
      <HeadersBg>
      <h2 className="welcome">{t("homepage:homePage.WelcomeToKrow")}</h2>
      <Greeting />
      </HeadersBg>
      <div className="bg-white">
        <CTAButtons />
        <h2>{t("homepage:homePage.CommunityUpdates")}</h2>
        <CommunityUpdates />
        <p className="home__featured-locations">
          <h2>{t("homepage:FeaturedLocations")}</h2>
          <Link id="home__view-all-locations" to="/locations">
          {t("homepage:homePage.viewAll")}
          </Link>
        </p>
        <FeaturedLocations />
        <ImportantMessage />
      </div> 
      <StarRating amountVotes={amountVotes} ratingAVG={ratingAVG} location_id={locationId} />
    </div>
  );
};

export default Homepage;
