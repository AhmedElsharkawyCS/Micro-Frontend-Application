import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "react-toastify/dist/ReactToastify.css";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onAuth }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin' render={(props) => <Signin {...props} onAuth={onAuth} />} />
            <Route path='/auth/signup' component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
      <ToastContainer
        position='top-center'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
