import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Home } from "../View/Home/Home";
import { Login } from "../Auth/Login/Login";
import { ResetCSS } from "../DesignSystem/constants";
import { LandingPage } from "../View/LandingPage/LandingPage";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ResetCSS />
    <RouterProvider router={appRouter} />
  </>
);
