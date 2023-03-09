import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles.css";
import "./Navbar_style.css";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/About.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
