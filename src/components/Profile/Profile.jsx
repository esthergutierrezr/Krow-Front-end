import React, {useEffect} from "react";
import {NavLink as Link} from "react-router-dom";
import {Content} from "./Styles";

const Profile = () => {

    // show dropdown
    useEffect=()=>{

        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
    }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          const dropdowns = document.getElementsByClassName("dropdown-content");
          let i;
          for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

  return (
    <Content>
      <header>
        <h1>Profile</h1>
      </header>
      <p>User img</p>
      <p>Name</p>
      <p>Active Membership</p>
      <p>Membership Status</p>
      <div className="dropdown">
        <button onClick="myFunction()" className="dropbtn">
          Account Settings
        </button>
        <div id="myDropdown" className="dropdown-content">
          <Link to="/profile/edit">Edit Profile</Link>
          <Link to="/profile/password">Change Password</Link>
        </div>
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
