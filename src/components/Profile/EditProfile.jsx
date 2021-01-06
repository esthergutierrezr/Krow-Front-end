import React, {useState, useEffect, useContext} from "react";
import EditMode from './EditMode';
import { UserContext } from "../../contexts/UserContext";


const EditProfile = () => {

  const { id, firstName, lastName, phoneNumber, gender, email, city, profession, industry } = useContext(UserContext)

  const [user, setUser] = useState({
    id, 
    firstName,
    lastName,
    email,
    gender,
    phoneNumber,
    city,
    profession,
    industry,
  });

  const editUser = (e, editedUser) => {
    e.preventDefault();
    const { ...updatedUser } = editedUser;
    
    // const newUser =  updatedUser.id ? updatedUser : user
    
    setUser(updatedUser);
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
