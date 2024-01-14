import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import Dashboard from "../pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <h1>Nothing Here!</h1>,
      },
    ],
  },
]);
