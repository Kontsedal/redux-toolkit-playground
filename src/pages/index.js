import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/index.scss";

export const RootPage = () => (
  <Provider store={store}>
    <div>hi</div>
  </Provider>
);
