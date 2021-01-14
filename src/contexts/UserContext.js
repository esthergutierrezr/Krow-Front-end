import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
  const { auth, user, setUser } = useContext;
  const [activeUser, setActiveUser] = useState({});

  if (auth) {
    setActiveUser(user);
  }


  return (
    <UserContext.Provider value={{ ...activeUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
