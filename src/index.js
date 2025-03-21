import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./common.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename="/cake-project">

          <App />

        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
