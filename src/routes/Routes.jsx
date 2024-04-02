import React from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = React.lazy(() => import("../components/layout/layout/Layout"));
const Admin = React.lazy(() => import("../components/pages/Admin/Admin"));
const Home = React.lazy(() => import("../components/pages/home/Home"));
const CheckAuthentication = React.lazy(() => import("../utils/authCheckProtectedRoutes/CheckAuthentication"));
const Register = React.lazy(() => import("../components/pages/register/Register"));
const Login = React.lazy(() => import("../components/pages/login/Login"));
const ErrorPage = React.lazy(() => import("./../components/pages/ErrorPage/ErrorPage"));

const Routes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "admin",
          element: (
            <CheckAuthentication>
              <Admin />
            </CheckAuthentication>
          )
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ]);
};

export default Routes;
