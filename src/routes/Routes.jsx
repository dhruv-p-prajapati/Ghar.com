import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthCheckUser from "../utils/authCheckProtectedRoutes/AuthCheckUser";
import { useSelector } from "react-redux";
import HomeUser from "../components/pages/home/HomeUser";
import AuthCheckBuilder from "../utils/authCheckProtectedRoutes/AuthCheckBuilder";
import AuthCheckAdmin from "../utils/authCheckProtectedRoutes/AuthCheckAdmin";
import HomeAdmin from "../components/pages/home/HomeAdmin";
import HomeBuilder from "../components/pages/home/HomeBuilder";
const Layout = React.lazy(() => import("../components/layout/layout/Layout"));
const RegisterBuilder = React.lazy(() => import("../components/pages/register/RegisterBuilder"));
const RegisterUser = React.lazy(() => import("../components/pages/register/RegisterUser"));
const Admin = React.lazy(() => import("../components/pages/Admin/Admin"));
const Home = React.lazy(() => import("../components/pages/home/Home"));
const CheckAuthentication = React.lazy(() => import("../utils/authCheckProtectedRoutes/CheckAuthentication"));
const Login = React.lazy(() => import("../components/pages/login/Login"));
const ErrorPage = React.lazy(() => import("./../components/pages/ErrorPage/ErrorPage"));
const CreateProperty = React.lazy(() => import("./../components/pages/CreateProperty/CreateProperty"));
const AllProperties = React.lazy(() => import("../components/pages/AllProperties/AllProperties"));
const PropertyDetail = React.lazy(() => import("../components/pages/PropertyDetail/PropertyDetail"));
const SavedProperties = React.lazy(() => import("../components/pages/SavedProperties/SavedProperties"));

const Routes = () => {
  const { user, builder, admin } = useSelector((state) => state.role);

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
          path: "/all-properties",
          element: <AllProperties />
        },
        {
          path: "property/:propertyId",
          element: <PropertyDetail />
        },
        {
          element: <AuthCheckUser isAuth={user !== null ? true : false} />,
          children: [
            {
              path: "user",
              element: <HomeUser />
            },
            {
              path: "saved-properties",
              element: <SavedProperties />
            }
          ]
        },
        {
          element: <AuthCheckBuilder isAuth={builder !== null ? true : false} />,
          children: [
            {
              path: "builder",
              element: <HomeBuilder />
            },
            {
              path: "create-property",
              element: <CreateProperty />
            }
          ]
        },
        {
          element: <AuthCheckAdmin isAuth={admin !== null ? true : false} />,
          children: [
            {
              path: "admin",
              element: <HomeAdmin />
            }
          ]
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
