import React, {useState, useContext} from 'react';
import { UserContext } from "../../contexts/UserContext";
import UserProfileEdit from "./UserProfile"

const EditMode = (props) => {
    
  const { firstName, lastName, phoneNumber, country, company, email, city, profession, industry} = useContext(UserContext)

  const { user,  editUser } = props;

  const [editedUser, setEditedUser] = useState({
      firstName,
      lastName,
      email,
      country,
      company,
      phoneNumber,
      city,
      profession,
      industry,
    });

    const [inEditMode, setInEditMode] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedUser({ [name]: value });
    };
    // const handleChange = (e) => {
    //   const {name} = e.target;
    //   const {value} = e.target;
    //   setEditedUser({ ...editedUser, [name]: value });
    // };
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
              defaultValue={firstName}
              name="firstName"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={email}
              name="email"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={phoneNumber}
              name="phoneNumber"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={country}
              name="country"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={city}
              name="city"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={company}
              name="company"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={profession}
              name="profession"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={industry}
              name="industry"
            />
            <br />
            <button type="submit">Save changes</button>
          </form>
        </div>
      {/* ) : (
        <div>
          <h4>
            Name:
            {`${firstName} ${lastName}`}
          </h4>
          <h4>
            Email:
            {email}
          </h4>
          <h4>
            Gender:
            {gender}
          </h4>
          <h4>
          Phone:
            {phoneNumber}
          </h4>
          <h4>
            City:
            {city}
          </h4>
          <h4>
            Profession:
            {profession}
          </h4>
          <h4>
            Industry:
            {industry}
          </h4>
        </div>
      )}
      <button
        onClick={() => setInEditMode(!inEditMode)}
      >
        {inEditMode ? "Cancel Edit" : "Edit Profile"}
      </button> */}
    </div>
  )
}

export default EditMode;
