import React from "react";
import { Grommet } from "grommet";
import { theme } from "./theme/default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Ecomerce } from "./pages/Ecomerce/Ecomerce";
import { Dashbaord } from "./pages/Dashbaord/Dashbaord";
import { NotFound404 } from "./pages/NotFound404/NotFound404";
import { HeaderLanding } from "./components/HeaderLanding/HeaderLanding";
import { FooterLanding } from "./components/FooterLanding/FooterLanding";

function App() {
  return (
    <Grommet full theme={theme} style={{ overflowX: "hidden" }}>
      <Router>
        <HeaderLanding />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/ecomerce">
            <Ecomerce />
          </Route>
          <Route exact path="/dashbaord">
            <Dashbaord />
          </Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
        <FooterLanding />
      </Router>
    </Grommet>
  );
}

export default App;
