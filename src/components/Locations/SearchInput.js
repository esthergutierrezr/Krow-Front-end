import React from "react";

import { LocationContext } from "../../contexts/LocationContext";

function SearchInput() {
  // use react context and specifically the ProductSearchContext
  const { searchValue, updateSearchValue } = React.useContext(LocationContext);
  return (
    <div>
      <input
        value={searchValue}
        onChange={(event) => updateSearchValue(event.target.value)}
      />
    </div>
  );
}

export default SearchInput;
