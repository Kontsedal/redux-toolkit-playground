import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";

export const RootPage = () => (
  <Provider store={store}>
    <div>hi</div>
  </Provider>
);
