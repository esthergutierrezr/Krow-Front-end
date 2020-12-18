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

import React, { Component } from 'react';

import Arrow from "./arrow+left.png";
import { Header } from "./Styles";

class EditProfile extends Component {
  state = {
    title: "",
    director: "",
    year: "",
    duration: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    //console.log(name, value);
    this.setState({ [name]: value });
  };
  render() {
    const { title, director, year, duration } = this.state;
    return (
      <div>
         <Header>
           <Link></Link>
    <img src={Arrow} className="arrowleft" />
    <h1>Edit Profile</h1>
  </Header>

        <form
          onSubmit={(event) => this.props.addMovie(event, this.state)}
          style={{ padding: "10px", border: "1px black solid" }}
        >
          <label>Title</label>
          <input onChange={this.handleChange} value={title} name="title" />
          <br />
          <label>Director</label>
          <input
            onChange={this.handleChange}
            value={director}
            name="director"
          />
          <br />
          <label>Year</label>
          <input onChange={this.handleChange} value={year} name="year" />
          <br />
          <label>Duration</label>
          <input onChange={this.handleChange} value={duration} name="duration" />
          <br />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }
}
    
    

export default EditProfile
