import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/index.scss";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { HomePage } from "./Home";

export const ROUTES = {
  HOME: "/",
};

export const RootPage = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <HomePage />
        </Route>

        <Route>
          <Redirect to={ROUTES.HOME} />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
