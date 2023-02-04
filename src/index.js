import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </Provider>,
 
  document.getElementById("root")
);
