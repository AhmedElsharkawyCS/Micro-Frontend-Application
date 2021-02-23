import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Header from "./components/Header";
import Loading from "./components/Loading";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));

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
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path='/auth' render={(props) => <AuthApp {...props} onAuth={handleUserAuth} />} />
              <Route path='/' component={MarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
