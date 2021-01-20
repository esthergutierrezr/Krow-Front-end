import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";

import UserProfileEdit from "./UserProfile"

const EditMode = (props) => {
    
  const { user } = useContext(AuthContext)

  const { editUser } = props;

  const [editedUser, setEditedUser] = useState({
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });

    const [inEditMode, setInEditMode] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedUser({ [name]: value });
    };
 
    
  return (
    <div>
      <h1>Edit Profile</h1>
      {/* {inEditMode ? ( */}
      <UserProfileEdit />
        <div>
          <form
            onSubmit={(e) => {
              editUser(e, editedUser);
              setInEditMode(false);
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
            {/* <input
              onChange={handleChange}
              defaultValue={country}
              name="country"
              placeholder="Country"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={city}
              name="city"
              placeholder="City"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={company}
              name="company"
              placeholder="Company"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={profession}
              name="profession"
              placeholder="Profession"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={industry}
              name="industry"
              placeholder="Industry"
            />
            <br /> */}
            <Link to="/profile">
              <button type="submit">Save changes</button>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default EditMode;
