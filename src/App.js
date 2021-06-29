import React, { Suspense } from "react";
import { Grommet } from "grommet";
import { theme } from "./theme/default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HeaderLanding } from "./components/HeaderLanding/HeaderLanding";
import { FooterLanding } from "./components/FooterLanding/FooterLanding";
import { UserContextProvider } from "./auth/context/UserContextProvider";
import { PrivateRoute } from "./auth/components/PrivateRoute";
import { Loading } from "./components/Loading/Loading";

const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const Ecomerce = React.lazy(() => import("./pages/Ecomerce/Ecomerce"));
const Dashbaord = React.lazy(() => import("./pages/Dashbaord/Dashbaord"));
const NotFound404 = React.lazy(() => import("./pages/NotFound404/NotFound404"));

function App() {
  return (
    <UserContextProvider>
      <Grommet full theme={theme} style={{ overflowX: "hidden" }}>
        <Router>
          <HeaderLanding />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              {/* <PrivateRoute exact path="/ecomerce" component={Ecomerce} /> */}
              <Route exact path="/ecomerce" component={Ecomerce} />
              <PrivateRoute exact path="/dashboard" component={Dashbaord} />
              <Route component={NotFound404} />
            </Switch>
          </Suspense>
          <FooterLanding />
        </Router>
      </Grommet>
    </UserContextProvider>
  );
}

export default App;
