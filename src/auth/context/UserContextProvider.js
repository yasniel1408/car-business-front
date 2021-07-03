import React, { createContext, useState } from "react";
import getTokenSession from "../utils/getTokenSession";
import getTokenStorage from "../utils/getTokenStorage";
import getUserDataSession from "../utils/getUserDataSession";
import getUserDataStorage from "../utils/getUserDataStorage";

export const DataUserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(getUserDataStorage() || getUserDataSession());
  const [token, setToken] = useState(getTokenStorage() || getTokenSession());

  return (
    <DataUserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </DataUserContext.Provider>
  );
};
