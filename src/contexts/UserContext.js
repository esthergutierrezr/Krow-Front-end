import React, {createContext, useState} from 'react';

export const UserContext = createContext();


function UserContextProvider(props) {
  const [user, setUser] = useState({
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    gender: "female",
    email: "janedoe@email.com",
    image: "https://images.unsplash.com/photo-1609694923332-ac96287d7203?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    phoneNumber: 555555555,
    password: "xxxxx",
    profession: "work",
    isMember: true
  })

  const toggleIsMember = () => {
    setUser({...user, isMember: !user.isMember})
  }

  return (
    <UserContext.Provider value={{...user, toggleIsMember}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;