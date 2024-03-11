import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import "modern-normalize/modern-normalize.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>,
);
