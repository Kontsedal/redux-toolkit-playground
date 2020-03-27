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
import { CocktailPage } from "./Cocktail";

export const ROUTES = {
  HOME: "/",
  COCKTAIL: "/cocktail/:id",
};

export const RootPage = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <HomePage />
        </Route>
        <Route exact path={ROUTES.COCKTAIL}>
          <CocktailPage />
        </Route>
        <Route>
          <Redirect to={ROUTES.HOME} />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
