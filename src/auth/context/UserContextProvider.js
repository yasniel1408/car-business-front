import React, { createContext, useState } from "react";

export const DataUserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <DataUserContext.Provider value={{user, setUser}}>
      {children}
    </DataUserContext.Provider>
  );
};
