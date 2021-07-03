import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { DataUserContext } from "../context/UserContextProvider";
import setTokenSession from "../utils/setTokenSession";
import setTokenStorage from "../utils/setTokenStorage";
import setUserDataSession from "../utils/setUserDataSession";
import setUserDataStorage from "../utils/setUserDataStorage";

export default function useLogin() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);
  const { setUser, setToken } = useContext(DataUserContext);


  const login = useCallback(async (value) => {
    const { rememberMe, ...res } = value;
    setLoading(true);

    try {
      axios({
        url: `${process.env.REACT_APP_API_ENDPOINT}/auth/local`,
        method: "POST",
        data: res,
      })
        .then((response) => {
          setData(response.data)
          setUser(response.data.user)
          setToken(response.data.jwt)
          if (rememberMe) {
            setUserDataStorage({ user: response.data.user });
            setTokenStorage({ token: response.data.jwt });
          } else {
            setUserDataSession({ user: response.data.user });
            setTokenSession({ token: response.data.jwt });
          }
        })
        .catch((err) => {
          switch (err.message) {
            case "Network Error":
              setError("Ups! parece que no hay conexión a internet");
              break;
            case "Request failed with status code 400":
              setError("Email o password incorrectos!");
              break;

            default:
              setError(JSON.stringify(err.message));
              break;
          }
          setTimeout(() => {
            setError(null);
          }, 2000);
        })
        .finally(() => {
          setLoading(false);
        });

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [setData, setUser, setToken]);

  return { login, error, isLoading, data };
}
