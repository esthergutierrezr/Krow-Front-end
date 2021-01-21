import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

function UserProfile() {
  const { user } = useContext(AuthContext);

  const initialGreeting = `Welcome, ${user.fullName}`;

  return (
    <div className="greeting">
      <h1>{initialGreeting}</h1>
      <img
        className="profile-picture"
        src={user.image}
        alt={`${user.fullName}`}
      />
      <br />
      {/* {isMember ? (
        <>
          <p>Active Membership</p>
          <p>
            Expire in
            (time to expire membership)
          </p>
        </>
      ) : ( */}
      <>
        <br />
        <p>Active Membership</p>
        <br />
        <p>Expire in (time to expire membership)</p>
      </>
      <br />
      <>
        <p className="no-membership">No Active Membership</p>
        <br />
        <Link to="/membership">
          <p className="add-membership">Add a Membership</p>
        </Link>
      </>
      {/* )} */}
    </div>
  );
}

export default UserProfile;
