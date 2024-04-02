import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/Routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Loader } from "./components/common";

const App = () => {
  const router = Routes();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ToastContainer autoClose={2000} closeOnClick pauseOnFocusLoss={false} pauseOnHover className="mt-16 min-w-[200px] xsm:min-w-[320px] left-auto text-sm xsm:text-sm md:text-base" />
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
