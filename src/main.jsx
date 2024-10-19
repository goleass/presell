import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { Quiz } from "./quiz/720_receitas_zero";

const router = createBrowserRouter([
  {
    path: "/720-receitas-zero",
    element: (
      <App>
        <Quiz />
      </App>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
