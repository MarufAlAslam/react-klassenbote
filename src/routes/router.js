import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import Dashboard from "../pages/dashboard";
import AlleSchulen from "../pages/alle-schulen";
import SchuleHinzufugen from "../pages/schule-hinzufügen";

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
        path: "/alle-schulen",
        element: <AlleSchulen />,
      },
      {
        path: "/schule-hinzufügen",
        element: <SchuleHinzufugen />,
      },
      {
        path: "*",
        element: <h1>Nothing Here!</h1>,
      },
    ],
  },
]);
