import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Greeting from "./greeting/Greeting";
import CTAButtons from "./CTAButtons";
import CommunityUpdates from "./communityUpdates/CommunityUpdates";
import FeaturedLocations from "./featuredLocations/FeaturedLocations";
import ImportantMessages from "./importanteMessages/ImportantMessages";
import { AuthContext } from "../../contexts/AuthContext";
import "./homepage.css";

const Homepage = () => {

  const { user } = useContext(AuthContext);
  const { t } = useTranslation(["homepage"]);
  return (
    <div homepage>
        <Greeting />
      <div className="bg-white">
        <CTAButtons />
        <h2 className='h2 raleway'>{t("homepage:homePage.CommunityUpdates")}</h2>
        <CommunityUpdates />
        <p className="home__featured-locations">
          <h2 className='h2 raleway'>{t("homepage:homePage.FeaturedLocations")}</h2>
          <Link id="home__view-all-locations raleway" to="/locations">
            {t("homepage:homePage.viewAll")}
          </Link>
        </p>
        <FeaturedLocations />
        <ImportantMessages />
      </div> 
    </div>
  );
};

export default Homepage;
