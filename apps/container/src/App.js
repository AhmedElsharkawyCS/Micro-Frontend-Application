import React, { lazy, Suspense, useEffect, useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Progress from "./components/Progress";
import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {},
  });
  const handleUserAuth = (user) => {
    setAuth({ isAuthenticated: true, user });
  };
  const handleLogOut = () => {
    localStorage.clear();
    setAuth({ isAuthenticated: false, user: {} });
  };
  const checkUserAuth = () => {
    try {
      const user = JSON.parse(localStorage.getItem("auth-user"));
      if (user) setAuth({ isAuthenticated: true, user });
    } catch (error) {
      setAuth({ isAuthenticated: false, user: {} });
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={handleLogOut} isAuthenticated={auth.isAuthenticated} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy onAuth={handleUserAuth} />
              </Route>
              <Route path='/dashboard' render={(props) => (auth.isAuthenticated ? <DashboardLazy {...props} /> : <Redirect to='/' />)} />
              <Route path='/' render={(props) => <MarketingLazy {...props} isAuthenticated={auth.isAuthenticated} />} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
