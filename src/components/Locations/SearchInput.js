import React from "react";
import "./SearchInput.css";
import { LocationContext } from "../../contexts/LocationContext";
import MapIcon from "../Style/SVG/Locations/MapIcon.svg";
import ListIcon from "../Style/SVG/Locations/ListIcon.svg";

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import useOnclickOutside from "react-cool-onclickoutside";

// function SearchInput() {
//   const { searchValue, updateSearchValue } = React.useContext(LocationContext);

//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       /* Define search scope here */
//     },
//     debounce: 300,
//   });
//   const registerRef = useOnclickOutside(() => {
//     // When user clicks outside of the component, we can dismiss
//     // the searched suggestions by calling this method
//     clearSuggestions();
//   });

//   const handleInput = (e) => {
//     // Update the keyword of the input element
//     setValue(e.target.value);
//   };

//   const handleSelect = ({ description }) => () => {
//     // When user selects a place, we can replace the keyword without request data from API
//     // by setting the second parameter as "false"
//     setValue(description, false);
//     clearSuggestions();

//     // Get latitude and longitude via utility functions
//     getGeocode({ address: description })
//       .then((results) => getLatLng(results[0]))
//       .then(({ lat, lng }) => {
//         console.log("📍 Coordinates: ", { lat, lng });
//       })
//       .catch((error) => {
//         console.log("😱 Error: ", error);
//       });
//   };

//   const renderSuggestions = () =>
//     data.map((suggestion) => {
//       const {
//         id,
//         structured_formatting: { main_text, secondary_text },
//       } = suggestion;

//       return (
//         <li key={id} onClick={handleSelect(suggestion)}>
//           <strong>{main_text}</strong> <small>{secondary_text}</small>
//         </li>
//       );
//     });

//   return (
//     <div ref={registerRef}>
//       <input
//         value={value}
//         onChange={handleInput}
//         disabled={!ready}
//         placeholder="..."
//       />
//       {/* We can use the "status" to decide whether we should display the dropdown or not */}
//       {status === "OK" && <ul>{renderSuggestions()}</ul>}
//     </div>
//   );
// }

// export default SearchInput;

function SearchInput() {
  // use react context and specifically the ProductSearchContext
  const { searchValue, updateSearchValue, map, setShowMap } = React.useContext(
    LocationContext
  );

  // const [list, setShowList] = React.useState(true);

  // const showList = () => {
  //   setShowList(list);
  // };

  const changeView = () => {
    setShowMap(!map);
  };
  return (
    <div className="all-searchInput">
      <div className="input-container">
        <input
          value={searchValue}
          onChange={(event) => updateSearchValue(event.target.value)}
          className="search-input"
          placeholder="Search Locations"
        />
        {/* <img className="input-img" src="../Style/SVG/Locations/search.png" /> */}
      </div>
      <img onClick={changeView} className="map-icon" alt="map" src={MapIcon} />
      <img
        onClick={changeView}
        className="list-icon"
        alt="list"
        src={ListIcon}
      />
    </div>
  );
}

export default SearchInput;
