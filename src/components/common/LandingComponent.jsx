import React from "react";

const LandingComponent = ({ title = "", description = "" }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-[url('/images/main.jpg')] bg-fixed h-[50vh] md:h-[75vh] bg-cover md:rounded-b-[40px] md:mt-[-12px]">
        <div className="h-full bg-gradient-to-b from-primary to-[rgba(0,0,0,0.5)] md:bg-cover md:rounded-b-[40px] flex flex-col gap-5 justify-center items-center text-white font-semibold">
          <div className="text-3xl">{title}</div>
          <div className="text-base md:text-lg w-[90%] md:w-[60%] text-center leading-6">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
