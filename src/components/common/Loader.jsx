import React from "react";
import { FallingLines, Grid } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-slate-200">
      <Grid visible={true} height="150" width="100" color="#2b7cff" ariaLabel="grid-loading" radius="11" />
    </div>
  );
};

export default Loader;
