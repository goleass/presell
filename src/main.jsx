import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

import { Pixel, Quiz } from "./quiz/720_receitas_zero";

const router = createBrowserRouter([
  {
    path: "/720-receitas-zero",
    element: (
      <App>
        <Quiz />
      </App>
    ),
  },
  {
    path: "/",
    element: <App>Hellow</App>,
  },
  {
    path: "/pixel-teste",
    element: (
      <HelmetProvider>
        <App>
        <Helmet>
        <Pixel />
        </Helmet>
        </App>
      </HelmetProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
