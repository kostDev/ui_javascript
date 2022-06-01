import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import App from "./App";
import Store from "./Store/Store";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
