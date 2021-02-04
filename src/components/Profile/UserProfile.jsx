import React, { useContext } from "react";
import { Link } from "react-router-dom";
import picture from "../Style/SVG/HomePage/SVG_Screen Registar-01.svg"
import { AuthContext } from "../../contexts/AuthContext";
import "./profile.css"

function UserProfile() {
  const { user } = useContext(AuthContext);

  console.log(user)

  const initialGreeting = `Welcome, ${user.fullName}`;

  return (
    <div className="greeting">
      <h1>{initialGreeting}</h1>
      <img
        className="profile-picture"
        src={picture}
        // src={!user.image ? picture : user.image}
        alt={`${user.fullName}`}
      />
      {/* <>
      <br />
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
      </> */}
      {/* )} */}
    </div>
  );
}

export default UserProfile;
