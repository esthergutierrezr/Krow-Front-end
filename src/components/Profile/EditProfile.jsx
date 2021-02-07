import React, { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Content } from "./Styles";

import UserProfile from "./UserProfile";

const EditProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const { t } = useTranslation(["profile"]);
  const id = Number(user.id);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    console.log("newUser", user);
    setEditedUser(user);
  }, [user]);

  useEffect(
    (editUser) => {
      console.log("newUser", user);
      setUser(user);
    },
    [editedUser]
  );

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
      <h2>{t("profile:editProfile.edit")}</h2>
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
            placeholder={t("profile:editProfile.firstLastName")}
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
            placeholder={t("profile:editProfile.phoneNumber")}
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.country}
            name="country"
            placeholder={t("profile:editProfile.country")}
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.city}
            name="city"
            placeholder={t("profile:editProfile.city")}
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.company}
            name="company"
            placeholder={t("profile:editProfile.company")}
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.profession}
            name="profession"
            placeholder={t("profile:editProfile.profession")}
          />
          <br />
          <input
            onChange={handleChange}
            defaultValue={editedUser.industry}
            name="industry"
            placeholder={t("profile:editProfile.industry")}
          />
          <br />
          <button onClick={() => handleSubmit()} type="submit">
          {t("profile:editProfile.save")}
          </button>
        </form>
      </div>
    </Content>
  );
};

export default EditProfile;
