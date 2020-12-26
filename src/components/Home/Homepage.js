import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import Greeting from "./home-subcomponents/greeting/Greeting";
import CTAButtons from "./home-subcomponents/CTAButtons";
import CommunityUpdates from "./home-subcomponents/CommunityUpdates";
import FeaturedLocations from "./home-subcomponents/FeaturedLocations";
import ImportantMessage from "./home-subcomponents/ImportantMessage";

const Homepage = () => {
  const [state, setState] = React.useState({});
    return (
      <div>
        <Greeting />
        <h2>Welcome to Krow.Works</h2>
        {/* <CTAButtons />
        <h2>Community updates</h2>
        <CommunityUpdates />
        <h2>Featured Locations</h2>
        <Link to="/locations">view all</Link>
        <FeaturedLocations />
        <ImportantMessage /> */}

      </div>
    )
}

export default Homepage
