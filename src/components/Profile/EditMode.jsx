import React, {useState, useContext} from 'react';
import { UserContext } from "../../contexts/UserContext";

const EditMode = (props) => {
    
  const { firstName, lastName, phoneNumber, image, gender, email, city, profession, industry} = useContext(UserContext)

  const { editUser } = props;

  const [editedUser, setEditedUser] = useState({
      firstName,
      lastName,
      email,
      gender,
      phoneNumber,
      city,
      profession,
      industry,
    });

    const [inEditMode, setInEditMode] = useState(false);
  
    const handleChange = (e) => {
      const {name} = e.target;
      const {value} = e.target;
      setEditedUser({ ...editedUser, [name]: value });
    };
  return (
    <div>
      <h1>Edit Profile</h1>
      {inEditMode ? (
        <div>
          <form
            onSubmit={(e) => {
              editUser(e, editedUser);
              setInEditMode(false);
            }}
          >
            <label>First Name: </label>
            <input
              onChange={handleChange}
              defaultValue={firstName}
              name="firstName"
            />
            <br />
            <label>Last Name: </label>
            <input
              onChange={handleChange}
              defaultValue={lastName}
              name="lastName"
            />
            <br />
            <label>Email: </label>
            <input
              onChange={handleChange}
              defaultValue={email}
              name="email"
            />
            <br />
            <label>Gender: </label>
            <input
              onChange={handleChange}
              defaultValue={gender}
              name="gender"
            />
            <br />
            <label>Phone: </label>
            <input
              onChange={handleChange}
              defaultValue={phoneNumber}
              name="phoneNumber"
            />
            <br />
            <label>City: </label>
            <input
              onChange={handleChange}
              defaultValue={city}
              name="city"
            />
            <br />
            <label>Profession: </label>
            <input
              onChange={handleChange}
              defaultValue={profession}
              name="profession"
            />
            <br />
            <label>Industry: </label>
            <input
              onChange={handleChange}
              defaultValue={industry}
              name="industry"
            />
            <br />
            <button type="submit">Save changes</button>
          </form>
        </div>
      ) : (
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
      </button>
    </div>
  )
}

export default EditMode;
