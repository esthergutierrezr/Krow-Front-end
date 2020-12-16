import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div>
      <Link to="/locations">Map</Link>
      {/*<Link to="/chat?">Chat</Link>*/}
      <Link to="/">Homepage</Link>
      <Link to="/profile">Profile</Link>


    </div>
  );
};
export default BottomNav;