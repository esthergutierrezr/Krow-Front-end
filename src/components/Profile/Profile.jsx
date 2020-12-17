/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import Users from "./UserArray";
import Arrow from "./Arrow.png";
import { Content } from "./Styles";

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    Users.map((response) => 
    console.log(response)
    
    );
  }, []);

  // show dropdown

  return (
    <Content>
      <header>
        <h1>Profile</h1>
      </header>
      <p>User img</p>
      <p>Name</p>
      <p>Active Membership</p>
      <p>Membership Status</p>
      <div className="nav">
        <div className="multi-level">
          <div className="item">
            <input type="checkbox" id="A" />
            <img src={Arrow} className="arrow"/>
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
        <label>Log Out</label>
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
