import React, {useContext} from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
import { AuthContext } from '../../../contexts/AuthContext'

// This component renders a component according to the log-in and membership status of the user.

function Greeting() {
  const { user } = useContext(AuthContext)

  return (
    <React.Fragment>
      {user ? <UserGreeting {...user} /> : <GuestGreeting />}
    </React.Fragment>
  );
}

export default Greeting;
