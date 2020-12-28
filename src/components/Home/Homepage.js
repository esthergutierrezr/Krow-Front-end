import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import Greeting from "./greeting/Greeting";
import CTAButtons from "./CTAButtons";
import CommunityUpdates from "./communityUpdates/CommunityUpdates";
import FeaturedLocations from "./featuredLocations/FeaturedLocations";
import ImportantMessage from "./ImportantMessage";
import './homepage.css'

const Homepage = () => {
  const [state, setState] = React.useState({});
    return (
      <div homepage>
        <Greeting />
        <h2>Welcome to Krow.Works</h2>
        <CTAButtons />
        <h2>Community updates</h2>
        <CommunityUpdates />
        <h2>Featured Locations</h2>
        <Link to="/locations">view all</Link>
        <FeaturedLocations />
        <ImportantMessage />

      </div>
    )
}

export default Homepage
