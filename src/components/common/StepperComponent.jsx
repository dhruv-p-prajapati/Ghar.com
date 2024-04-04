import React from "react";
import { Stepper } from "react-form-stepper";
import { STEPS } from "../../utils/constants";

const StepperComponent = ({ activeStep }) => {
  return (
    <>
      <Stepper
        steps={STEPS}
        activeStep={activeStep}
        styleConfig={{
          activeBgColor: "#2b7cff",
          activeTextColor: "#fff",
          //   inactiveBgColor: "#9ca3af",
          //   inactiveTextColor: "#fff",
          completedBgColor: "#22c55e",
          completedTextColor: "#fff"
        }}
        className="text-base w-[min(700px,95vw)] m-auto mt-10"
        connectorStyleConfig={{
          size: 2,
          disabledColor: "#9ca3af",
          activeColor: "#9ca3af",
          completedColor: "#9ca3af"
        }}
      />
    </>
  );
};

export default StepperComponent;
