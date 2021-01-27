import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Content } from "./Styles";

import UserProfile from "./UserProfile";

const EditMode = () => {
  const { user, setUser } = useContext(AuthContext);
  const id = Number(user.id);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    console.log("newUser", user);
    setEditedUser(user);
  }, [user]);

  useEffect((editUser) => {
    console.log("newUser", user);
    setUser(user);
  }, [editedUser]);

  const handleChange = (event) => {
    setEditedUser({ ...editedUser, [event.target.name]: event.target.value });
  };

  const editUser = (e) => {
    console.log("editedUser", editedUser);
    e.preventDefault();
    setUser({ ...editedUser });
  };

  const handleSubmit = () => {
    axios
      .put(`/profile/${id}`, editedUser)
      .then((response) => {
        // console.log("response",response);
        alert("User has been successfully updated");
        history.push(`/profile/${id}`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Content>
      <Link to={`/profile/${id}`}>
        <i className="arrowBack left" />
      </Link>
      <h2>Edit Profile</h2>
      <UserProfile />
      <div>
        <form
          onSubmit={(e) => {
            editUser(e);
          }}
        >
          <input
            onChange={handleChange}
            defaultValue={editedUser.fullName}
            name="fullName"
            placeholder="First and last name"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.email}
            name="email"
            placeholder="Email"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.phoneNumber}
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.country}
            name="country"
            placeholder="Country"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.city}
            name="city"
            placeholder="City"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.company}
            name="company"
            placeholder="Company"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.profession}
            name="profession"
            placeholder="Profession"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.industry}
            name="industry"
            placeholder="Industry"
          />
          <br />
          <button onClick={() => handleSubmit()} type="submit">
            Save changes
          </button>
        </form>
      </div>
    </Content>
  );
};

export default EditMode;
