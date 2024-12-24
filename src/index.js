import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from React 18+
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);