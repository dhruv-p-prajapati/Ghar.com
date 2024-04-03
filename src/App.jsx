import React, { Suspense } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/Routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Loader } from "./components/common";
import { useSelector } from "react-redux";

const App = () => {
  const router = Routes();
  const loader = useSelector((state) => state.app.loader);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ToastContainer autoClose={2000} closeOnClick pauseOnFocusLoss={false} pauseOnHover transition={Bounce} />
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
