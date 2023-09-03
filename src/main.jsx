import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/style.css";

// Get the root element where the React app will be rendered.
const rootElement = document.querySelector("#root");

// Create a root for concurrent mode rendering.
const root = ReactDOM.createRoot(rootElement);

// Render the main application wrapped in React.StrictMode and BrowserRouter.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
