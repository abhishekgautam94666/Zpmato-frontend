import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/style/home.css";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Toaster />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
