import React from "react";
import ApiLocations from "../ApiLocations.json";
import ListLocationCard from "./ListLocationCard";
import { LocationContext } from "../../../contexts/LocationContext";

function ListContainer() {
  const { searchValue } = React.useContext(LocationContext);
  return (
    <div>
      <h1>ListContainer</h1>
      <div>
        {ApiLocations.filter((location) =>
          location.name.toLowerCase().includes(searchValue.toLowerCase())
        ).map((location) => (
          <ListLocationCard {...location} />
        ))}
      </div>
    </div>
  );
}

export default ListContainer;
