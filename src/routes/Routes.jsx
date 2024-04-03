import React from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = React.lazy(() => import("../components/layout/layout/Layout"));
const RegisterBuilder = React.lazy(() => import("../components/pages/register/RegisterBuilder"));
const RegisterUser = React.lazy(() => import("../components/pages/register/RegisterUser"));
const Admin = React.lazy(() => import("../components/pages/Admin/Admin"));
const Home = React.lazy(() => import("../components/pages/home/Home"));
const CheckAuthentication = React.lazy(() => import("../utils/authCheckProtectedRoutes/CheckAuthentication"));
const Login = React.lazy(() => import("../components/pages/login/Login"));
const ErrorPage = React.lazy(() => import("./../components/pages/ErrorPage/ErrorPage"));

const Routes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "user/register",
          element: <RegisterUser />
        },
        {
          path: "builder/register",
          element: <RegisterBuilder />
        },
        {
          path: "admin",
          element: (
            <CheckAuthentication>
              <Admin />
            </CheckAuthentication>
          )
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
