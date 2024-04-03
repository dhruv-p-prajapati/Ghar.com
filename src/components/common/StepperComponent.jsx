import React from "react";
import { Stepper } from "react-form-stepper";

const StepperComponent = ({ steps = [], activeStep }) => {
  return (
    <>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        styleConfig={{
          activeBgColor: "#2b7cff",
          activeTextColor: "#fff",
          inactiveBgColor: "#fff",
          inactiveTextColor: "#2b7cff",
          completedBgColor: "#fff",
          completedTextColor: "#2b7cff"
        }}
        className="text-xl"
        connectorStyleConfig={{
          size: 3
        }}
      />
    </>
  );
};

export default StepperComponent;
