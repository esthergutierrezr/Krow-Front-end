import React from "react";
import "./SearchInput.css";
import { LocationContext } from "../../contexts/LocationContext";
import MapIcon from "../Style/SVG/Locations/MapIcon.svg";
import ListIcon from "../Style/SVG/Locations/ListIcon.svg";
import lupa from "../Style/SVG/Locations/lupa.svg";

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
        {map ? (
          <img className="input-img-map" src={lupa} />
        ) : (
          <img className="input-img-list" src={lupa} />
        )}
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
