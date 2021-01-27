import React, {useState, useContext} from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import UserProfileEdit from "./UserProfile"

const EditMode = () => {
    
  const { user } = useContext(AuthContext);
  const { firstName, lastName, phoneNumber, country, company, email, city, profession, industry} = user;

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
              placeholder="Name"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={email}
              name="email"
              placeholder="Email"
            />
            <br />
            <input
              onChange={handleChange}
              defaultValue={phoneNumber}
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <br />
            <input
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
