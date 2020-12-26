import React from 'react';
import {Link} from 'react-router-dom';

function CTAButtons(props) {
  return (
    <div className="home__ctabuttons">
      <Link to="/membership"><img className="ctabuttons__button" src="https://via.placeholder.com/150" alt="get a membership" /></Link>
      <Link to="/referafriend"><img className="ctabuttons__button" src="https://via.placeholder.com/150" alt="refer a friend" /></Link>
    </div>
  );
}

export default CTAButtons;