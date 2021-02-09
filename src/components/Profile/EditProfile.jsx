/* eslint-disable no-alert */
import React, { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Content, FormEdit, DivEdit, SaveChanges } from "./Styles";
import UserEdit from "./UserEdit";
import {config} from "../../helpers/auth"


const EditProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const { t } = useTranslation(["profile"]);
  const id = Number(user.id);
  const [editedUser, setEditedUser] = useState({});
  const history = useHistory();

  // update editedUser when user info loads
  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleChange = (event) => {
    setEditedUser({ ...editedUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/profile/${id}/edit`, editedUser, config)
      .then(async (response) => {
        const user = await setUser(response.data[0]);
        history.push(`/profile/${id}`);
      })
      .catch((error) => console.error(error));
    alert("Profile Successfully Updated");
  };

  return (
    <div className="bg-white-profile">
      <Content>
        <UserEdit />
        <DivEdit>
          <FormEdit onSubmit={(e) => handleSubmit(e)}>
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
            <SaveChanges type="submit">
              {t("profile:editProfile.save")}
            </SaveChanges>
          </FormEdit>
        </DivEdit>
      </Content>
    </div>
  );
};

export default EditProfile;
