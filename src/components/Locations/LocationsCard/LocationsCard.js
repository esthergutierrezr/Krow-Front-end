import React from "react";

function LocationsCard(props) {
  const [state, setState] = React.useState({
    // showModal: false,
  });

  // const checkoutClicked = () => console.log("checkedinn");

  // const openModal = () => {
  //   setState({ ...state, showModal: true });
  // };

  // const closeModal = () => {
  //   setState({ ...state, showModal: false });
  // };

  console.log(props);
  console.log(state.currentLocationId);
  return (
    <div>
      <h1>{props.name}</h1>
      {/* {state.showModal ? (
        <LocationDetails
          {...state}
          openModal={openModal}
          closeModal={closeModal}
        />
      ) : null} */}
      <img src={props.image} alt="image" width="250" height="220" />
      <a href={`/locations/${props.id}`}>Details</a>

      <div>
        <p>Wifi Details</p>
        <p>Network:{props.network}</p>
        <p>Password:{props.password}</p>
      </div>
      <div>Closing at </div>
      <button>Check Out</button>
    </div>
  );
}

export default LocationsCard;
