import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShoeProvider } from "./Components/context/ShoeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShoeProvider>
      <App />
    </ShoeProvider>
  </React.StrictMode>
);
