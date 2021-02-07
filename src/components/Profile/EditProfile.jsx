/* eslint-disable no-alert */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Content, FormEdit, DivEdit, SaveChanges } from "./Styles";
import UserEdit from "./UserEdit";

const EditProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const id = Number(user.id);
  const [editedUser, setEditedUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    // console.log("newUser", user);
    setEditedUser(user);
  }, [user]);

  useEffect(
    (editUser) => {
      // console.log("editedUser", user);
      setUser(user);
    },
    [editedUser]
  );

  const handleChange = (event) => {
    setEditedUser({ ...editedUser, [event.target.name]: event.target.value });
  };

  const editUser = (e) => {
    // console.log("editedUser", editedUser);
    e.preventDefault();
    setUser({ ...editedUser });
  };

  const handleSubmit = () => {
    axios
      .put(`/profile/${id}/edit`, editedUser)
      // .then((response) => {
      //   console.log("response", response);
      // })
      .catch((error) => console.error(error));
    alert("Profile Successfully Updated");
    history.push(`/profile/${id}`);

  };

  return (
    <div className="bg-white-profile">
      <Content>
        <UserEdit />
        <DivEdit>
          <FormEdit
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
            <SaveChanges onClick={() => handleSubmit()} type="submit">
              Save changes
            </SaveChanges>
          </FormEdit>
        </DivEdit>
      </Content>
    </div>
  );
};

export default EditProfile;
