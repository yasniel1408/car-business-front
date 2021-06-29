import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { DataUserContext } from "../context/UserContextProvider";

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(DataUserContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />
      }
    />
  );
};
