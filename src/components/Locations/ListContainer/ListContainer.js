import React from "react";
import ApiLocations from "../ApiLocations.json";
import ListLocationCard from "./ListLocationCard";
import { LocationContext } from "../../../contexts/LocationContext";
import { WhiteBg } from "../../Style/LocationStyles";

function ListContainer() {
  const { searchValue } = React.useContext(LocationContext);
  return (
    <div>
      <WhiteBg>
        {ApiLocations.filter((location) =>
          location.name.toLowerCase().includes(searchValue.toLowerCase())
        ).map((location) => (
          <ListLocationCard {...location} />
        ))}
      </WhiteBg>
    </div>
  );
}

export default ListContainer;
