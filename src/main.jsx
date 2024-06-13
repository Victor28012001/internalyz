import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.jsx";
// import App from './App';
import './index.css'

if (document.getElementById("root")) {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
}
