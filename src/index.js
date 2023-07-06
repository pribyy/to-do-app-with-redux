import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//connecting store to our app
import { store } from "./redux/store";
import { Provider } from "react-redux";
//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*connecting store via provider*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
