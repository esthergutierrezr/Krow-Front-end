import React from "react";
import { Link } from "react-router-dom";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

// This component renders a component according to the log-in and membership status of the user.

// Firstly if the user is not logged in it allows the user to log in or register through links. There is also a placeholder
// for the profile picture that leads to the log-in page.
// TODO: integrate context, if user is logged in --> stay logged in on refresh

function Greeting(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [user, setUser] = React.useState({
    // placeholder for future context
    firstName: "John",
    lastName: "Doe",
    membership: null,
    img:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  });

  // Used object "user" as placeholder  instead of context
  return (
    <div>
      {isLoggedIn ? <UserGreeting {...user} /> : <GuestGreeting {...user} />}

      <button type="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Log
      </button>
    </div>
  );
}

export default Greeting;
