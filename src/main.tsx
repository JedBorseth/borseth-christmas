import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import DrawNames from "./DrawNames";
import List from "./List";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/draw-names",
    element: <DrawNames />,
  },
  { path: "/list", element: <List /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
