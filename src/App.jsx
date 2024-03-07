import React from "react";
import { Admin, ErrorPage, Home, Login, Register } from "./components/pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import CheckAuthentication from "./utils/authCheckProtectedRoutes/CheckAuthentication";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "admin",
          element: (
            <CheckAuthentication>
              <Admin />
            </CheckAuthentication>
          ),
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
