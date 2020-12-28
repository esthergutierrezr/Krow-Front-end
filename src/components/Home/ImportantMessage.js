import React from 'react';
import { Link } from "react-router-dom";

function ImportantMessage(props) {
  return (
      <Link className="important-messages" to= "/important-message">
        <img  className="important-message" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqiN4D4wysq8b13L1V_sGzg5R_Z-I3Ar1WA&usqp=CAU" />
      </Link>
  );
}

export default ImportantMessage;