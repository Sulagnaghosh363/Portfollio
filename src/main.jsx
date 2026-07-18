import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import SplashCursor from "./components/SplashCursor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SplashCursor />
    <App />
  </React.StrictMode>
);
