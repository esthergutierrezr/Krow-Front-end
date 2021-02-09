/* eslint-disable no-alert */
import React, { useRef, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Content, DivEdit, FormChange, Save } from "./Styles";
import UserChange from "./UserChange";
import "./profile.css";
import {config} from "../../helpers/auth"
// body of backend current_password, new_password, user_id

const ChangePassword = () => {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation(["profile"]);
  const [newPassword, setNewPassword] = useState("");
  // const [fields, setFieldChange] = useState({
  //   newPassword: "",
  //   oldPassword: "",
  //   confirmPassword: "",
  // });
  const id = Number(user.id);
  const history = useHistory();
  const { register, errors, handleSubmit, watch } = useForm({});
  // const password = useRef({});
  // password.current = watch("newPassword", "");

  // fields that i need to backend
  // const { currentPassword, newPassword, userId } = req.body;

  // how to compare in front end if old password it's teh same

  //

  const handleChange = (event) => {
    // console.log("name", event.target.name);
    // console.log("value", event.target.value);
    setFieldChange({ [event.target.name]: event.target.value });
  };

  // ******try 3
  const onSubmit = (data) => {
    console.log("data: ", data);
    // console.log("event: ", event);
    axios
      .put("/password/change", {
        currentPassword: data.oldPassword,
        newPassword: data.confirmPassword,
        userId: id

      }, config)
      .then(async (response) => {
        console.log("response: ", response);
        // const user = await setUser(response.data[0]);
        history.push(`/profile/${id}`);
      })
    //   .catch((error) => console.error(error));
    alert("Password has been Changed Successfully");
  };

  return (
    <div className="bg-white-profile">
      <Content>
        <UserChange />
        <DivEdit>
          <FormChange onSubmit={handleSubmit(onSubmit)}>
            <h1>Password</h1>
            <input
              // onChange={handleChange}
              type="password"
              name="oldPassword"
              placeholder={t("profile:changePassword.old")}
              // value={oldPassword}
              ref={register({ required: true })}
            />
            <br />
            <input
              name="newPassword"
              placeholder={t("profile:changePassword.new")}
              onChange={(event) => setNewPassword(event.target.value)}
              type="input"
              value={newPassword}
              ref={register({
                minLength: 8,
                required: true,
                pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i,
                // message: "Password must have at least 8 characters",
              })}
            />
            <br />
            <input
              name="confirmPassword"
              placeholder={t("profile:changePassword.confirm")}
              // onChange={handleChange}
              type="input"
              ref={register({
                required: true,
                validate: {
                  asyncValidate: async (value) =>
                    (await value) === newPassword ||
                    "The passwords do not match",
                },
              })}
            />
            {errors.newPassword && (
              <p>
                Password must have at least 8 characters, 1 special character
                and 1 number{" "}
              </p>
            )}
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <br />
            <Link to="/password/reset">
              <h2>{t("profile:changePassword.forget")}?</h2>
            </Link>
            <br />
            <Save type="submit">{t("profile:changePassword.change")}</Save>
          </FormChange>
        </DivEdit>
      </Content>
    </div>
  );
};

export default ChangePassword;
