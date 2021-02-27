import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Progress from "./components/Progress";
import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

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
      setAuth({ isAuthenticated: true, user });
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={handleLogOut} isAuthenticated={auth.isAuthenticated} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy onAuth={handleUserAuth} />
              </Route>
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
