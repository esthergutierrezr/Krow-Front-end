import React from 'react';
import {Link} from 'react-router-dom';

function CTAButtons(props) {
  return (
    <div className="home__ctabuttons">
      <Link to="/membership"><img className="ctabuttons__button" src="https://growthzonesitesprod.azureedge.net/wp-content/uploads/sites/1419/2019/12/Member-Button.png" alt="get a membership" /></Link>
      <Link to="/referafriend"><img className="ctabuttons__button" src="https://thumbs.dreamstime.com/b/refer-friend-share-information-isolated-icon-recommendation-reference-social-media-function-vector-repost-male-profile-emblem-153969352.jpg" alt="refer a friend" /></Link>
    </div>
  );
}

export default CTAButtons;