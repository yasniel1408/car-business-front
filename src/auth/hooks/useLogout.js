import { useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { DataUserContext } from "../context/UserContextProvider";
import setLogout from "../utils/setLogout";

export default function useLogout() {
  let history = useHistory();
  const { setUser, setToken } = useContext(DataUserContext);

  const logout = useCallback(() => {
    setLogout();
    setUser(null);
    setToken(null);
    history.push("/");
  }, [history, setToken, setUser]);
  return { logout };
}
