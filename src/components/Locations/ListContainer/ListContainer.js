import React from "react";
import ApiLocations from "../ApiLocations.json";
import ListLocationCard from "./ListLocationCard";
import { LocationContext } from "../../../contexts/LocationContext";
import { WhiteBg } from "../../Style/LocationStyles";
import "./ListLocationCard.css";

function ListContainer() {
  const { searchValue } = React.useContext(LocationContext);
  return (
    <div style={{ width: "100vw" }}>
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
