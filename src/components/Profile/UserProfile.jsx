import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function UserProfile() {
  const { firstName, lastName, isMember, image } = useContext(UserContext);

  const initialGreeting = `Hi, ${firstName} ${lastName}`;

  return (
    <div className="greeting">
      <h1>{initialGreeting}</h1>
      <br />
      {isMember ? (
        <>
          <p>Active Membership</p>
          <p>
            Expire in
            (time to expire membership)
          </p>
        </>
      ) : (
        <>
          <p className="no-membership">No Active Membership</p>
          <br />
          <Link to="/membership">
            <p className="add-membership">Add a Membership</p>
          </Link>
        </>
      )}
      <img
        className="profile-picture"
        src={image}
        alt={`${firstName}_${lastName}`}
      />
    </div>
  );
}

export default UserProfile;
