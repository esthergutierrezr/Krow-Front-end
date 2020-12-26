import React from 'react';
import {Link} from 'react-router-dom';

function CTAButtons(props) {
  return (
    <div>
      <Link to="/membership"><img src="" alt="get a membership" /></Link>
      <Link to="/referafriend"><img src="" alt="refer a friend" /></Link>
    </div>
  );
}

export default CTAButtons;