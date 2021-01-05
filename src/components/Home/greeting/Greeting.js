import React, {useContext} from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

// This component renders a component according to the log-in and membership status of the user.

// Firstly if the user is not logged in it allows the user to log in or register through links. There is also a placeholder
// for the profile picture that leads to the log-in page.
// TODO: integrate context, if user is logged in --> stay logged in on refresh

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  // Used object "user" as placeholder  instead of context
  return (
    <div>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}

      <button type="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Log
      </button>
    </div>
  );
}

export default Greeting;
