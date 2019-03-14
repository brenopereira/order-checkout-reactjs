import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Cart from "./pages/cart";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Cart />
  </Provider>,
  document.getElementById("root")
);
