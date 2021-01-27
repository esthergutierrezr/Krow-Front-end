import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function UserProfileEdit() {
  const { firstName, lastName, isMember, image } = useContext(AuthContext);

  const initialGreeting = `Hi, ${firstName} ${lastName}`;

  return (
    <div className="greeting">
      <img
        className="profile-picture"
        src={image}
        alt={`${firstName}_${lastName}`}
      />
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
        <p>
          <p className="no-membership">No Active Membership</p>
          <br />
          <Link to="/membership">
            <p className="add-membership">Add a Membership</p>
          </Link>
        </p>
      )}
    </div>
  );
}

export default UserProfileEdit;
