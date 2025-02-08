import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./common.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store, persisterStore} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisterStore}>
        <BrowserRouter basename="/cake-project">

          <App />

        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
