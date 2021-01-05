import React, { useState, useContext } from "react";
import { NavLink as Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
// import Users from "./UserArray";
import Arrow from "./arrow+left.png";
import { Content } from "./Styles";

// function UserGreeting() {
//   const {firstName, lastName, isMember, image, toggleIsMember} = useContext(UserContext)

//   const initialGreeting = `Hi, ${firstName} ${lastName}`;

//   return (
//     <div className="greeting-container">
//       <span>
//         {initialGreeting}
//         <br />
//         {isMember
//           ? "active membership!"
//           : (<span>
//               No active membership
//               <br />
//               <Link to="membership">Click here to buy a plan</Link>
//             </span>)
//         }
//       </span>
//       <Link to="/profile"><img className="profile-picture" src={image} alt={firstName} /></Link>
//     </div>
//   );
// }

// export default UserGreeting;

export function LogOut() {
  // Some endpoints don't exist yet --> register

  return (
    <div className="greeting-container">
      <span>
        <Link to="/register">Sign Up</Link>
        {" | "}
        <Link to="/login">Log in</Link>
      </span>
      <Link to="/login">
        <img
          className="profile-picture"
          src="https://via.placeholder.com/150"
          alt=""
        />
      </Link>
    </div>
  );
}


const Profile = () => {
  const { firstName, lastName, isMember, image } = useContext(UserContext);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // show dropdown

  return (
    <Content>
      <header>
        <h1>Profile</h1>
      </header>

      {isLoggedIn ? <UserProfile /> : <LogOut />}

      <div className="nav">
        <div className="multi-level">
          <div className="item">
            <input type="checkbox" id="A" />
            <img src={Arrow} className="arrow" />
            <label htmlFor="A">Account Settings</label>
            <ul>
              <Link to="/profile/edit">
                <li>Edit Profile</li>
              </Link>
              <Link to="/profile/password">
                <li>Change Password</li>
              </Link>
            </ul>
          </div>
        </div>
        <label>Contact Us</label>
        <button type="button" onClick={() => log(!isLoggedIn)}>
          Log Out
        </button>
      </div>
    </Content>
    // Account settings(drop down menu)
    // edit profile
    // header same from Homepage with different display
    // Image
    // Username
    // (active) membership
    // Buy membership (link)
    // Form fields
    // Phone number
    // Email address
    // Username
    // City
    // Profession
    // Company
    // Button Save details
    // change password
    // old password
    // new password
    // confirm password
    // forget password (different component????)
    // insert email
    // Button Send Reset Link
    // (How generate a link to reset password)
    // History
    // Billing
    // membership card
    // Check-Ins
    // check-in card
    // Discounts (link to Refer Friend)
    // Contact Us (link to web site contact)
    // Log out
  );
};

export default Profile;
