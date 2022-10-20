import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StudentProvider from "./contextAPI/StudentProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StudentProvider>
    <App />
    </StudentProvider>
  </React.StrictMode>
);
reportWebVitals();
