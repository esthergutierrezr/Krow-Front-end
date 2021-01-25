import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Content } from "./Styles";

import UserProfile from "./UserProfile";

const EditMode = (props) => {
  const { user, setUser } = useContext(AuthContext);

  // const { editUser, user } = props;

  // console.log(props)

  const [editedUser, setEditedUser] = useState({
    // fullName: user.fullName,
    // email: user.email,
    // phoneNumber: user.phoneNumber,
    // city: user.city,
    // country: {},
  });

  // const [inEditMode, setInEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ [name]: value });
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser({ ...user }, editedUser);
    console.log('editedUser', user)
    // setEditedUser({})
  };

  console.log(props);

  return (
    <Content>
      <Link to={`/profile/${user.id}`}>
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
            defaultValue={user.fullName}
            name="fullName"
            placeholder="First and last name"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={user.email}
            name="email"
            placeholder="Email"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={user.phoneNumber}
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={user.country}
            name="country"
            placeholder="Country"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={user.city}
            name="city"
            placeholder="City"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={user.company}
            name="company"
            placeholder="Company"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={user.profession}
            name="profession"
            placeholder="Profession"
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={user.industry}
            name="industry"
            placeholder="Industry"
          />
          <br />
          {/* <Link to="/profile"> */}
          <button type="submit">Save changes</button>
          {/* </Link> */}
        </form>
      </div>
    </Content>
  );
};

export default EditMode;
