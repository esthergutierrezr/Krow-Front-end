// header same from Homepage with different display
// Image
// Username
// (active) membership
// Buy membership (link)
// Form fields
// Phone number
// Email address
// Username
// City
// Profession
// Company
// Button Save details

import React, { Component } from "react";

import { NavLink as Link } from "react-router-dom";
import Arrow from "./arrow+left.png";
import { Header } from "./Styles";

class EditProfile extends Component {
  state = {
    username: this.props.username,
    email: this.props.email,
    phone: this.props.phone,
    city: this.props.city,
    profession: this.props.profession,
    company: this.props.company,
    industry:this.props.industry,
    inEditMode: true,
    id: this.props.id,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      id,
      username,
      email,
      phone,
      city,
      profession,
      company,
      insdustry,
      editUser,
    } = this.props;

    const { inEditMode } = this.state;

    return (
      <div>
        <Header>
          <Link to="/profile">
            <img src={Arrow} className="arrowleft" />
          </Link>
          <h1>Edit Profile</h1>
        </Header>
        <div style={{ margin: "15px", border: "1px black solid" }}>
          {inEditMode ? (
            <div>
              <form
                onSubmit={(event) => {
                  editUser(event, this.state);
                  this.setState({ inEditMode: false });
                }}
              >
                <label>email</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={email}
                  replace="email"
                  name="email"
                />
                <br />
                <label>username</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={username}
                  name="username"
                />
                <br />
                <label>email</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={email}
                  name="email"
                />
                <br />
                <label>phone</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={phone}
                  name="phone"
                />
                <br />
                <label>website</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={website}
                  name="website"
                />
                <br />
                <button type="submit">Save Details</button>
              </form>
            </div>
          ) : (
            <div style={{ margin: "10px" }}>
              <p>Name: {name}</p>
              <p>Username: {username}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Website: {website}</p>
            </div>
          )}
          <button
            style={{ margin: "10px" }}
            onClick={() => this.setState({ inEditMode: !inEditMode })}
          >
            {inEditMode && "Save Details" }
          </button>
        </div>
      </div>
    );
  }
}

export default EditProfile;
