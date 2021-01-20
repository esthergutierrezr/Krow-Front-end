import React from "react";

function LocationDetails() {
  return (
    <div>
      <img src={props.image} alt="image" />
      <Link to="/" className="">
        Back
      </Link>
      <div>
        <h1>{props.name}</h1>
        <p>icon + opening times</p>
        <p>Icon + Location</p>
        <h2>Overview</h2>
        <p>{props.overview}</p>

        <div>
          <h2>Amenities</h2>
          <h4>Beverages Incruded</h4>
        </div>
        <div>
          <h2>Important Info</h2>
          <h4>Food Policy</h4>
          <p></p>
          <h4>Check-In Instructions</h4>
          <p></p>
        </div>
        <div>
          <h1>Letswort Timings</h1>
        </div>
        <div>
          <h1>Venue Location</h1>
          <link></link>
          <link></link>
          <div>
            <map></map>
          </div>
          <button onClick={checkoutClicked}>Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
