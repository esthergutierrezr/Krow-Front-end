import React from "react";

export function UserProfile() {
  // Some endpoints don't exist yet --> register

  return (
    <div>
      <img
        className="profile-picture"
        src={image}
        alt={`${firstName}_${lastName}`}
      />
      <p>
        Name:
        {`${firstName} ${lastName}`}
      </p>
      <p>
        {isMember ? (
          "active membership!"
        ) : (
          <p>
            No active membership
            <br />
            <Link to="membership">Click here to buy a plan</Link>
          </p>
        )}
      </p>
    </div>
  );
}
