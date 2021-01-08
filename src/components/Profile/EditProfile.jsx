/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import EditMode from './EditMode';
import { UserContext } from "../../contexts/UserContext";

const EditProfile = () => {

  const {user, setUser} = useContext(UserContext)

  const editUser = (e, editedUser) => {
    e.preventDefault();

    const { ...updatedUser } = editedUser;
        
    setUser(...user, updatedUser);
  }

  return (
    <div>
      <div>
        <EditMode editUser={editUser} />
      </div>
    </div>
  );
};
export default EditProfile;
