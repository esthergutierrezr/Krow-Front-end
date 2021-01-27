import LocationDetails from "./LocationDetails/LocationDetails";
import { Switch, Route } from "react-router-dom";
import Locations from "./Locations";

function MainLocations() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/locations" component={Locations} />
        <Route path="/locations/:id" component={LocationDetails} />
      </Switch>
    </div>
  );
}

export default MainLocations;
