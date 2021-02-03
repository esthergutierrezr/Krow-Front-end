import React from 'react';
import {Link} from 'react-router-dom';
import Invite from '../Style/SVG/HomePage/SVG_Screen Registar-03.svg';
import Subscribe from "../Style/SVG/HomePage/SVG_Screen Registar-02.svg"

function CTAButtons() {
  return (
    <div className="home__ctabuttons">
      <Link to="/membership">
        <div className="subscribe">
          <img className="ctabuttons__button" src={Subscribe} />
        <p>Subscribe</p>
        </div>
        </Link>
      <Link to="/invite">
        <div className="invite">
          <img className="ctabuttons__button" src={Invite} alt="refer a friend" />
        <p>Invite</p>
        </div>
        </Link>
    </div>
  );
}

export default CTAButtons;