import React, { createContext, useContext, useEffect } from "react";
import { DataUserContext } from "../../auth/context/UserContextProvider";
import { Loading } from "../../components/Loading/Loading";
import useAxios from "../../hooks/useAxios";

export const EcomerceDataContext = createContext();

export const EcomerceProvider = ({ children }) => {
  const { token } = useContext(DataUserContext);

  let { getResponse, error, isLoading, data } = useAxios();

  useEffect(() => {
    window.scrollTo(0, 0);
    getResponse({
      url: "https://car-strapi.herokuapp.com/autos",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loading size="large" />;
  if (error) return <h1> {JSON.stringify(error)} </h1>;

  return (
    <EcomerceDataContext.Provider value={data}>
      {children}
    </EcomerceDataContext.Provider>
  );
};
