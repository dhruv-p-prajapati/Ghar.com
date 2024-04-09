import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthCheckUser from "../utils/authCheckProtectedRoutes/AuthCheckUser";
import AuthCheckBuilder from "../utils/authCheckProtectedRoutes/AuthCheckBuilder";
import AuthCheckAdmin from "../utils/authCheckProtectedRoutes/AuthCheckAdmin";

const HomeUser = React.lazy(() => import("../components/pages/home/HomeUser"));
const HomeAdmin = React.lazy(() => import("../components/pages/home/HomeAdmin"));
const HomeBuilder = React.lazy(() => import("../components/pages/home/HomeBuilder"));
const Layout = React.lazy(() => import("../components/layout/layout/Layout"));
const RegisterBuilder = React.lazy(() => import("../components/pages/register/RegisterBuilder"));
const RegisterUser = React.lazy(() => import("../components/pages/register/RegisterUser"));
const Home = React.lazy(() => import("../components/pages/home/Home"));
const Login = React.lazy(() => import("../components/pages/login/Login"));
const ErrorPage = React.lazy(() => import("./../components/pages/ErrorPage/ErrorPage"));
const CreateProperty = React.lazy(() => import("./../components/pages/builder/CreateProperty/CreateProperty"));
const AllProperties = React.lazy(() => import("../components/pages/AllProperties/AllProperties"));
const PropertyDetail = React.lazy(() => import("../components/pages/PropertyDetail/PropertyDetail"));
const SavedProperties = React.lazy(() => import("../components/pages/user/SavedProperties/SavedProperties"));
const ListedProperties = React.lazy(() => import("../components/pages/builder/ListedProperties/ListedProperties"));
const ReviewRequest = React.lazy(() => import("../components/pages/admin/ReviewRequest/ReviewRequest"));
const UpdateProperty = React.lazy(() => import("../components/pages/builder/UpdateProperty/UpdateProperty"));
const PendingRequests = React.lazy(() => import("../components/pages/builder/PendingRequests/PendingRequests"));
const AcceptedRequests = React.lazy(() => import("../components/pages/builder/AcceptedRequests/AcceptedRequests"));
const OwnProperties = React.lazy(() => import("../components/pages/user/OwnProperties/OwnProperties"));
const Users = React.lazy(() => import("../components/pages/admin/Users/Users"));

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
            },
            {
              path: "owned-properties",
              element: <OwnProperties />
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
            },
            {
              path: "update-property/:propertyId",
              element: <UpdateProperty />
            },
            {
              path: "pending-request",
              element: <PendingRequests />
            },
            {
              path: "accepted-request",
              element: <AcceptedRequests />
            },
            {
              path: "listed-property",
              element: <ListedProperties />
            }
          ]
        },
        {
          element: <AuthCheckAdmin isAuth={admin !== null ? true : false} />,
          children: [
            {
              path: "admin",
              element: <HomeAdmin />
            },
            {
              path: "review-request",
              element: <ReviewRequest />
            },
            {
              path: "users",
              element: <Users />
            }
          ]
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
