import React from "react";
import ApiLocations from "./ApiLocations.json";
import ListLocationCard from "./ListLocationCard";

function ListContainer() {
  return (
    <div>
      <h1>ListContainer</h1>
      <div>
        {ApiLocations.map((location) => (
          <ListLocationCard {...location} />
        ))}
      </div>
    </div>
  );
}

export default ListContainer;
