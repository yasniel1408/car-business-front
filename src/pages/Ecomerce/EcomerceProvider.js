import React, { createContext, useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";
import useAxios from "../../hooks/useAxios";

export const EcomerceDataContext = createContext();

export const EcomerceProvider = ({ children }) => {
  let { getResponse, error, isLoading, data } = useAxios();

  useEffect(() => {
    window.scrollTo(0, 0);
    getResponse({ url: "/autos", method: "GET" });
  },[]);

  if (isLoading) return <Loading size="large" />;
  if (error) return <h1> {JSON.stringify(error)} </h1>;

  return (
    <EcomerceDataContext.Provider value={data}>
      {children}
    </EcomerceDataContext.Provider>
  );
};
